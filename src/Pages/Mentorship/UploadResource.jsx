import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import InputAdornment from '@mui/material/InputAdornment';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
import MentorButton from "../../components/MentorComponents/MentorButton";

const UploadResourceContent = () => {
  const [file, setFile] = useState(null);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    type: "PDF",
    description: "",
    program: "",
    visibility: "Public",
  });

  const [resources, setResources] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle file select
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Upload logic
  const handleUpload = () => {
    if (!file || !form.title) {
      alert("Please select file and enter title");
      return;
    }

    const newResource = {
      id: Date.now(),
      name: form.title,
      type: form.type,
      date: new Date().toLocaleDateString(),
      visibility: form.visibility,
    };

    setResources([...resources, newResource]);

    // reset
    setForm({
      title: "",
      type: "PDF",
      description: "",
      program: "",
      visibility: "Public",
    });
    setFile(null);
  };

  // Delete logic
  const handleDelete = (id) => {
    setResources(resources.filter((r) => r.id !== id));
  };

  // Search filter
  const filteredResources = resources.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ mt: 4, p: 3, background: "#f5f6f8", minHeight: "100vh" }}>
      <MentorButton />
      <Typography variant="h5" fontWeight={600} mb={3}>
        Mentor Upload Resources
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography fontWeight={600} mb={2}>
          Upload Your Resource
        </Typography>

        {/* Upload Box */}
        <Box
          sx={{
            border: "2px dashed #4caf50",
            borderRadius: 2,
            p: 4,
            textAlign: "center",
            mb: 3,
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 40, color: "#4caf50" }} />
          <Typography mb={1}>
            {file ? file.name : "Drag & drop your file here"}
          </Typography>

          <Button
            component="label"
            variant="contained"
            size="small"
            sx={{ bgcolor: "#2e7d32" }}
          >
            Browse
            <input hidden type="file" onChange={handleFileChange} />
          </Button>
        </Box>

        {/* Form */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <TextField
            label="Resource Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
          />

          <FormControl>
            <Typography fontSize={14}>Resource Type</Typography>
            <RadioGroup
              row
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <FormControlLabel value="PDF" control={<Radio />} label="PDF" />
              <FormControlLabel value="PPT" control={<Radio />} label="PPT" />
              <FormControlLabel value="Video" control={<Radio />} label="Video" />
              <FormControlLabel value="Link" control={<Radio />} label="Link" />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            fullWidth
            sx={{ gridColumn: "span 2" }}
          />

          <FormControl fullWidth>
            <Select
              name="program"
              value={form.program}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">Associated Program or Startup</MenuItem>
              <MenuItem value="Seed">Seed Program</MenuItem>
              <MenuItem value="Growth">Growth Program</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <Typography fontSize={14}>Visibility</Typography>
            <RadioGroup
              row
              name="visibility"
              value={form.visibility}
              onChange={handleChange}
            >
              <FormControlLabel value="Public" control={<Radio />} label="Public" />
              <FormControlLabel
                value="Assigned"
                control={<Radio />}
                label="Assigned Startups"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#2e7d32" }}
            onClick={handleUpload}
          >
            Upload Resource
          </Button>
          <Button variant="outlined">Save Draft</Button>
        </Box>
      </Paper>

      {/* Table */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <TextField
          size="small"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredResources.map((r) => (
              <TableRow key={r.id}>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.type}</TableCell>
                <TableCell>{r.date}</TableCell>
                <TableCell sx={{ color: "#2e7d32" }}>
                  View &nbsp;
                  Edit &nbsp;
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(r.id)}
                  >
                    Delete
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default UploadResourceContent;
