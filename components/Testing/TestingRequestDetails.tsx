"use client";

import Tablet from "@/app/assets/Tablet.png";
import CustomButton from "@/components/CustomButton";
import {
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";

const upload = [
  {
    img: Tablet,
    title: "Aspirin",
    subtitle: "",
    btncolor: "error.main",
    details: {
      itemID: "12345",
      itemName: "Aspirin",
      batchNumber: "BATCH123",
      manufacturer: "Pharma Inc.",
      expiryDate: "2025-12-01",
      manufacturedDate: "2023-01-10",
      category: "Pain Relief",
      hospital: "City Hospital",
    },
    testingDetails: [
      "Tested for chemical stability",
      "No harmful side effects found",
      "Contains 500mg of active ingredient",
      "Approved for distribution in all major cities",
    ],
  },
];

const TestingRequestDetails = () => {
  return (
    <Grid container spacing={3}>
      {upload.map((blog, index) => (
        <Grid key={index} item xs={12} lg={12}>
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                {blog.title}
              </Typography>

              <Typography
                color="textSecondary"
                fontSize="14px"
                fontWeight={400}
              >
                {blog.subtitle}
              </Typography>

              <Grid container spacing={2}>
                {/* Image on the Left */}
                <Grid item xs={12} md={5}>
                  <Image
                    src={blog.img}
                    alt="img"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>

                {/* Medicine Details Table on the Right */}
                <Grid item xs={12} md={7}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>Item ID</TableCell>
                        <TableCell>{blog.details.itemID}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Item Name</TableCell>
                        <TableCell>{blog.details.itemName}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Batch Number</TableCell>
                        <TableCell>{blog.details.batchNumber}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Manufacturer</TableCell>
                        <TableCell>{blog.details.manufacturer}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Expiry Date</TableCell>
                        <TableCell>{blog.details.expiryDate}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Manufactured Date</TableCell>
                        <TableCell>{blog.details.manufacturedDate}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>{blog.details.category}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Hospital</TableCell>
                        <TableCell>{blog.details.hospital}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>

              {/* Testing Details below the image and details */}
              <Typography variant="h6" sx={{ mt: 2 }}>
                Testing Details
              </Typography>
              <ul>
                {blog.testingDetails.map((detail, index) => (
                  <li key={index}>
                    <Typography variant="body2">{detail}</Typography>
                  </li>
                ))}
              </ul>

              {/* Upload Button */}
              <CustomButton>Upload</CustomButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TestingRequestDetails;
