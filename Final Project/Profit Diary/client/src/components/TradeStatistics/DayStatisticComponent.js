import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

<Button
  variant="contained"
  color="primary"
  startIcon={<AddIcon />}
  onClick={() => handleDialogOpen()}
  style={{ backgroundColor: "black" }}
>
  Add Note
</Button>;
