import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Card, Container, Link, Stack } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import basketImg from "../assets/images/basket.png";
import noonImg from "../assets/images/noon.png";

const data = [
  {
    id: "N35997789A",
    category: "Baby Products",
    brand: "Tommy Hilfiger",
    marketplace: "#",
    sale_price: 30,
    chg: 15,
  },
  {
    id: "N35997789A",
    category: "Baby Products",
    brand: "Tommy Hilfiger",
    marketplace: "#",
    sale_price: 30,
    chg: -4.04,
  },
  {
    id: "N35997789A",
    category: "Baby Products",
    brand: "Tommy Hilfiger",
    marketplace: "#",
    sale_price: 22,
    chg: 15,
  },
  {
    id: "N35997789A",
    category: "Baby Products",
    brand: "Tommy Hilfiger",
    marketplace: "#",
    sale_price: 1,
    chg: 15,
  },
  {
    id: "N35997789A",
    category: "Baby Products",
    brand: "Tommy Hilfiger",
    marketplace: "#",
    sale_price: 3,
    chg: 15,
  },
];

const ComparableTradeVolume = () => {
  return (
    <Container maxWidth="xl" sx={{ my: "30px" }}>
      <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
        {/* Left Card */}
        <Card
          sx={{
            boxShadow: 3,
            pt: ".75rem",
            borderRadius: "10px",
            width: { sm: "100%", lg: "50%" },
          }}
        >
          {/* Section heading */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "0 .75rem 1.25rem .75rem" }}
          >
            <h2 style={{ fontSize: "12px", color: "#7A797D" }}>
              Comparable Trade Volume
            </h2>
            <Link
              href="#"
              underline="none"
              sx={{ fontSize: "12px", fontWeight: "600" }}
            >
              <Stack direction="row" alignItems="center">
                <span>See All Skus</span>
                <KeyboardArrowRightIcon />
              </Stack>
            </Link>
          </Stack>

          {/* Section Body */}
          <TableContainer component={Paper}>
            <Table
              sx={{ width: "100%", borderTop: "2px solid lightgray" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#7A797D",
                    }}
                  >
                    SKU
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#7A797D",
                    }}
                  >
                    Marketplace
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#7A797D",
                    }}
                  >
                    Buybox Sale Price
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#7A797D",
                    }}
                  >
                    Chg 24H
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="td" scope="row" sx={{ py: ".40rem" }}>
                      <img
                        src={basketImg}
                        alt="basket"
                        width="50px"
                        height="40px"
                      />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        color: "#7A797D",
                        py: ".40rem",
                      }}
                    >
                      <Stack direction="column">
                        <Link
                          href="#"
                          underline="none"
                          sx={{ fontWeight: "700" }}
                        >
                          {item.id}
                        </Link>
                        <Link
                          href="#"
                          underline="none"
                          sx={{ fontSize: "10px" }}
                        >
                          {item.category}
                        </Link>
                        <Link
                          href="#"
                          underline="none"
                          sx={{ fontSize: "10px" }}
                        >
                          {item.brand}
                        </Link>
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        color: "#7A797D",
                        py: ".40rem",
                      }}
                    >
                      <Link href={item.marketplace}>
                        <img
                          src={noonImg}
                          alt="marketplace"
                          width="15px"
                          height="15px"
                        />
                      </Link>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        color: "#7A797D",
                        py: ".40rem",
                      }}
                    >
                      {item.sale_price}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        color: `${item.chg > 0 ? "green" : "red"}`,
                        py: ".40rem",
                      }}
                    >
                      {item.chg}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        {/* Right Card */}
        <Card
          sx={{
            boxShadow: 3,
            pt: ".75rem",
            borderRadius: "10px",
            width: { sm: "100%", lg: "50%" },
          }}
        >
          {/* Section heading */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: "0 .75rem 1.25rem .75rem" }}
          >
            <h2 style={{ fontSize: "12px", color: "#7A797D" }}>
              Comparable Trade Volume
            </h2>
            <Link
              href="#"
              underline="none"
              sx={{ fontSize: "12px", fontWeight: "600" }}
            >
              <Stack direction="row" alignItems="center">
                <span>See All Skus</span>
                <KeyboardArrowRightIcon />
              </Stack>
            </Link>
          </Stack>

          {/* Section Body */}
          <TableContainer component={Paper}>
            <Table
              sx={{ width: "100%", borderTop: "2px solid lightgray" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#7A797D",
                    }}
                  >
                    SKU
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#7A797D",
                    }}
                  >
                    Marketplace
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#7A797D",
                    }}
                  >
                    Buybox Sale Price
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#7A797D",
                    }}
                  >
                    Chg 24H
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="td" scope="row" sx={{ py: ".40rem" }}>
                      <img
                        src={basketImg}
                        alt="basket"
                        width="50px"
                        height="40px"
                      />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        color: "#7A797D",
                        py: ".40rem",
                      }}
                    >
                      <Stack direction="column">
                        <Link
                          href="#"
                          underline="none"
                          sx={{ fontWeight: "700" }}
                        >
                          {item.id}
                        </Link>
                        <Link
                          href="#"
                          underline="none"
                          sx={{ fontSize: "10px" }}
                        >
                          {item.category}
                        </Link>
                        <Link
                          href="#"
                          underline="none"
                          sx={{ fontSize: "10px" }}
                        >
                          {item.brand}
                        </Link>
                      </Stack>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        color: "#7A797D",
                        py: ".40rem",
                      }}
                    >
                      <Link href={item.marketplace}>
                        <img
                          src={noonImg}
                          alt="marketplace"
                          width="15px"
                          height="15px"
                        />
                      </Link>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        color: "#7A797D",
                        py: ".40rem",
                      }}
                    >
                      {item.sale_price}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "12px",
                        color: `${item.chg > 0 ? "green" : "red"}`,
                        py: ".40rem",
                      }}
                    >
                      {item.chg}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Stack>
    </Container>
  );
};

export default ComparableTradeVolume;
