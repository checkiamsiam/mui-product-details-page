import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {
  Button,
  Card,
  Dialog,
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  LinearProgress,
  Link,
  Menu,
  TextField,
  Typography,
  DialogContentText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import saudiImg from "../assets/images/noon-saudi.svg";
import SkuProduct from "../assets/images/sku-product.png";
import alertModalData from "../assets/data/AlertData";

let delivery_method = []
const ProductAnalysisCardOne = () => {
  const [labelTime, setLabelTime] = useState("24H");
  const handleLabelTime = (t) => {
    if (t === "24H") {
      setLabelTime("7D");
    }
    if (t === "7D") {
      setLabelTime("30D");
    }
    if (t === "30D") {
      setLabelTime("24H");
    }
  };

  // Handle Watch List Menu
  const [watchListMenu, setWatchListMenu] = useState(null);
  const watchListMenuOpen = Boolean(watchListMenu);
  const handleStarClick = (event) => {
    setWatchListMenu(event.currentTarget);
  };
  const handleStarClose = () => {
    setWatchListMenu(null);
  };

  // Handle Watch List Dialog/Modal
  const [watchListModal, setWatchListModal] = useState(false);

  const handleWatchListModalOpen = () => {
    setWatchListModal(true);
  };

  const handleWatchListModalClose = () => {
    setWatchListModal(false);
  };

  // Handle Add Alert Modal
  const [openAddAlertModal, setOpenAddAlertModal] = useState(false);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  // Alert options and input
  const [alertData, setAlertData] = useState({
    platform: "",
    platform_country: "",
    category: "",
    sku_type: "",
    sku_sub_type: "",
    fulfilment_sku_type: "",
    brand: "",
    sku: "",
    alert_type: "",
    price_moves_below: "",
    price_moves_above: "",
    frequency: "",
    comment: "",
    delivery_method: [],
    summary: "",
  });
  
  const handleChange = (e) => {
    setAlertData({ ...alertData, [e.target.name]: e.target.value });
  };

  const handleChangeDeliveryMethod = (e) => {
    if (e.target.checked) {
      delivery_method.push(e.target.name)
      setAlertData({ ...alertData, delivery_method });
    } else {
      delivery_method = delivery_method.filter(item => item !== e.target.name)
      setAlertData({ ...alertData, delivery_method });
    }
  };

  // colors
  const gray = "#7A797D";
  const lightGray = "#999999";
  return (
    <>
      <Card
        sx={{
          padding: "1.5rem",
          width: { lg: "60%" },
          borderRadius: "10px",
          boxShadow: 3,
        }}
      >
        <Stack
          direction={{ md: "row" }}
          justifyContent="space-between"
          spacing={3}
        >
          <div style={{ width: { xs: "100%", md: "40%" } }}>
            <Stack direction="column" spacing={1} fontSize="12px">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <img src={SkuProduct} width="80px" height="70px" alt="" />
                  <Link href="#" underline="none">
                    N20984440A
                  </Link>
                </Stack>
                <Stack direction="row">
                  <IconButton
                    id="star-button"
                    aria-controls={watchListMenuOpen && "basic-menu"}
                    aria-haspopup="true"
                    aria-expanded={watchListMenuOpen && "true"}
                    onClick={handleStarClick}
                  >
                    <StarOutlineIcon />
                  </IconButton>
                  <IconButton
                    id="notify-button"
                    aria-controls={openAddAlertModal && "basic-menu"}
                    aria-haspopup="true"
                    aria-expanded={openAddAlertModal && "true"}
                    onClick={() => setOpenAddAlertModal(true)}
                  >
                    <NotificationsNoneIcon />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <span style={{ fontWeight: "bold", color: gray }}>
                  Rank <InfoIcon htmlColor={lightGray} fontSize="3px" />
                </span>
                <span style={{ color: gray }}>0</span>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <span style={{ fontWeight: "bold", color: gray }}>
                  Rate <InfoIcon htmlColor={lightGray} fontSize="3px" />
                </span>
                <span style={{ color: gray }}>0</span>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <span style={{ fontWeight: "bold", color: gray }}>
                  SKU Marketplace{" "}
                  <InfoIcon htmlColor={lightGray} fontSize="3px" />
                </span>
                <span style={{ color: gray }}>
                  <Link href="/marketplace">
                    <img src={saudiImg} width="40px" alt="" />
                  </Link>
                </span>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <span style={{ fontWeight: "bold", color: gray }}>
                  No. Of Sellers{" "}
                  <InfoIcon htmlColor={lightGray} fontSize="3px" />
                </span>
                <span style={{ color: gray }}>0</span>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <span style={{ fontWeight: "bold", color: gray }}>
                  Tags <InfoIcon htmlColor={lightGray} fontSize="3px" />
                </span>
                <span style={{ color: gray }}>Trending SKU</span>
              </Stack>
            </Stack>
          </div>
          <div style={{ width: { xs: "100%", md: "30%" } }}>
            <Stack
              direction="column"
              fontSize="12px"
              justifyContent="center"
              alignItems="center"
              spacing={0}
              color={gray}
              height="100%"
            >
              <p>3,943 Watchlists</p>
              <p>10 price Alerts</p>
              <p style={{ fontWeight: "bold" }}>Updated: 21 minutes ago</p>
            </Stack>
          </div>
          <div style={{ width: { xs: "100%", md: "40%" } }}>
            <h6
              style={{
                fontWeight: "bold",
                color: gray,
                textAlign: "center",
              }}
            >
              Buybox Sale Price{" "}
              <InfoIcon htmlColor={lightGray} fontSize="3px" />
            </h6>
            <Typography fontSize="12px" style={{ textAlign: "center" }}>
              SAR{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: gray,
                }}
              >
                18,87
              </span>{" "}
              <span style={{ color: "green" }}>3015%</span>
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={2}
              fontSize="12px"
              marginTop="10px"
            >
              <Stack width="75%">
                <Stack direction="row" justifyContent="space-between">
                  <span>Low</span>
                  <span>high</span>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={25}
                  sx={{
                    padding: "1px",
                    borderRadius: "5px",
                    bgcolor: "red",
                    margin: "2px 0px",
                  }}
                />
                <Stack direction="row" justifyContent="space-between">
                  <span>SAR 17,87</span>
                  <span>SAR 20,87</span>
                </Stack>
              </Stack>
              <Button
                onClick={() => handleLabelTime(labelTime)}
                variant="contained"
                size="small"
                sx={{ padding: "0px 30px" }}
              >
                {labelTime}
              </Button>
            </Stack>
            <Stack fontSize="12px" paddingTop="1rem">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <span style={{ fontWeight: "bold", color: gray }}>
                  Estimated SOH{" "}
                  <InfoIcon htmlColor={lightGray} fontSize="3px" />
                </span>
                <span style={{ color: gray }}>0</span>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <span style={{ fontWeight: "bold", color: gray }}>
                  Estimated SU Last 24h{" "}
                  <InfoIcon htmlColor={lightGray} fontSize="3px" />
                </span>
                <span style={{ color: gray }}>0</span>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </Card>

      {/* Start::WatchList, Notification Menu / Modal / Dialog */}
      {/* Watchlist Menu */}
      <Menu
        id="basic-menu"
        anchorEl={watchListMenu}
        open={watchListMenuOpen}
        onClose={handleStarClose}
        MenuListProps={{
          "aria-labelledby": "star-button",
        }}
      >
        <h3 style={{ fontSize: "15px", color: gray, padding: "0 1rem" }}>
          Select Watch List
        </h3>
        <Divider light />
        <Button
          variant="text"
          onClick={() => {
            handleWatchListModalOpen();
            handleStarClose();
          }}
          sx={{ px: 2 }}
          startIcon={<AddCircleIcon htmlColor="primary" />}
        >
          <span style={{ fontSize: "12px", color: gray }}>
            Add New WatchList
          </span>
        </Button>
      </Menu>

      {/* WatchList Dialog/Modal */}
      <Dialog
        open={watchListModal}
        onClose={handleWatchListModalClose}
        fullWidth
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <DialogTitle sx={{ color: gray, fontWeight: 700, fontSize: "20px" }}>
            New WatchList
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleWatchListModalClose}
            sx={{ color: gray, marginRight: ".75rem" }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider light />
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="watchlist"
            label="Enter Watchlist Title"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <Box height="20vh"></Box>
        <Divider light />
        <DialogActions sx={{ padding: "1rem" }}>
          <Button
            variant="outlined"
            sx={{ color: gray }}
            onClick={handleWatchListModalClose}
          >
            Close
          </Button>
          <Button variant="contained" onClick={handleWatchListModalClose}>
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add alert modal */}
      <Dialog
        open={openAddAlertModal}
        onClose={() => setOpenAddAlertModal(false)}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <DialogTitle
            id="scroll-dialog-title"
            sx={{ color: gray, fontWeight: 700, fontSize: "15px" }}
          >
            Add New Alert
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => setOpenAddAlertModal(false)}
            sx={{ color: gray, marginRight: ".75rem" }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        {/* <DialogTitle id="scroll-dialog-title">Get Alert</DialogTitle> */}
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box component="form" autoComplete="off">
              <Grid container spacing={1}>
                {alertModalData.map((item) => (
                  <Grid item xs={12} sm={6} key={item.name}>
                    <FormControl
                      sx={{ m: 1, minWidth: 120 }}
                      size="small"
                      // width="100%"
                      fullWidth
                    >
                      <InputLabel id={item.name}>{item.label}</InputLabel>
                      <Select
                        labelId={item.name}
                        id={item.name}
                        name={item.name}
                        value={alertData[item.name]}
                        label={item.label}
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {item.values.map((value) => (
                          <MenuItem key={value.label} value={value.label}>
                            {value.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                ))}
              </Grid>

              {/* Alert Delivery Method */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                <span style={{ fontSize: "15px", color: gray, fontWeight: 500 }}>
                  Delivery Method
                </span>
                <FormControlLabel
                  control={<Checkbox />}
                  label="WhatsApp"
                  name="whatsapp"
                  id="whatsapp"
                  value="whatsapp"
                  onChange={handleChangeDeliveryMethod}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Email"
                  name="email"
                  id="email"
                  value="email"
                  onChange={handleChangeDeliveryMethod}
                />
              </Stack>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{ color: gray }}
            onClick={() => setOpenAddAlertModal(false)}
          >
            Close
          </Button>
          <Button variant="contained">Add Alert</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductAnalysisCardOne;
