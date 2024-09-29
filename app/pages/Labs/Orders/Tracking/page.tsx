"use client";
import { BrowserMultiFormatReader } from "@zxing/library";
import "leaflet/dist/leaflet.css";
import QRCode from "qrcode";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const center = {
  lat: 17.385044,
  lng: 78.486671,
};

const page: React.FC = () => {
  const [location, setLocation] = useState(center);
  const [qrData, setQrData] = useState("HARD_CODED_QR_DATA"); // Hardcoded QR data
  const [receivedQrData, setReceivedQrData] = useState("");
  const qrCodeRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Simulate real-time location updates with hardcoded data
    const interval = setInterval(() => {
      setLocation((prevLocation) => ({
        lat: prevLocation.lat + 0.001, // Simulate location change
        lng: prevLocation.lng + 0.001, // Simulate location change
      }));
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (qrCodeRef.current) {
      QRCode.toCanvas(qrCodeRef.current, qrData, (error: any) => {
        if (error) console.error(error);
      });
    }
  }, [qrData]);

  const handleScan = (data: string) => {
    if (data) {
      setReceivedQrData(data);
      if (qrData === data) {
        alert("QR codes match. No tampering detected.");
      } else {
        alert("QR codes do not match. Possible tampering detected.");
      }
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader.listVideoInputDevices().then((videoInputDevices) => {
      if (videoInputDevices.length > 0 && videoRef.current) {
        const firstDeviceId = videoInputDevices[0].deviceId;
        codeReader
          .decodeOnceFromVideoDevice(firstDeviceId, videoRef.current)
          .then((result) => {
            if (result) {
              handleScan(result.getText());
            }
          })
          .catch(handleError);
      }
    });

    return () => {
      if (videoRef.current) {
        codeReader.reset();
      }
    };
  }, [qrData]);

  return (
    <div>
      <h1>Real-Time Tracking - Prototype</h1>
      <MapContainer
        center={location}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location}>
          <Popup>
            Vehicle Location: {location.lat}, {location.lng}
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{ marginTop: "20px" }}>
        <h2>QR Code</h2>
        <canvas ref={qrCodeRef}></canvas>
        <p>Hardcoded QR Data: {qrData}</p>
      </div>
      <div>
        <h2>Scan Received QR Code</h2>
        <video ref={videoRef} style={{ width: "100%" }} />
      </div>
      <div>
        <h2>Received QR Data</h2>
        <p>{receivedQrData}</p>
      </div>
    </div>
  );
};

export default page;
