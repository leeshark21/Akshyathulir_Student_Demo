import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

// DOMAIN LIST
const DOMAINS = [
  "IT (Information Technology)",
  "Agriculture",
  "Healthcare",
  "Manufacturing",
  "Education",
  "Finance",
  "Retail",
  "Logistics",
  "Construction",
  "Other",
];

// DOMAIN → SUBDOMAIN MAP
const DOMAIN_SUBDOMAIN_MAP = {
  "IT (Information Technology)": [
    "Web Development",
    "Mobile App Development",
    "Software Engineering",
    "Game Development",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Cyber Security",
    "UI/UX Design",
  ],
  Agriculture: [
    "Agri Technology",
    "Crop Management",
    "Soil Science",
    "Irrigation Systems",
    "Agro Marketing",
  ],
  Healthcare: [
    "Hospital Management",
    "Medical Devices",
    "Health Informatics",
    "Telemedicine",
  ],
  Manufacturing: [
    "Industrial Automation",
    "Production Planning",
    "Quality Control",
    "Robotics",
  ],
  Education: [
    "E-Learning",
    "EdTech",
    "Curriculum Design",
    "Learning Analytics",
  ],
  Finance: [
    "FinTech",
    "Banking Systems",
    "Risk Management",
    "Investment Analysis",
  ],
  Retail: [
    "E-Commerce",
    "Inventory Management",
    "Customer Analytics",
  ],
  Logistics: [
    "Supply Chain Management",
    "Warehouse Management",
    "Fleet Tracking",
  ],
  Construction: [
    "Project Management",
    "BIM",
    "Smart Buildings",
    "Safety Management",
  ],
  Other: [],
};

export default function Sector({ supportData, setSupportData }) {

  // 🔹 DOMAIN MULTI SELECT CHANGE
  const handleDomainChange = (event) => {
    const selectedDomains = event.target.value;

    setSupportData((prev) => {
      const existing = prev.industry_sectors || [];

      const updated = selectedDomains.map((domain) => {
        const found = existing.find((d) => d.domain === domain);
        return found || { domain, sub_domains: [] };
      });

      return {
        ...prev,
        industry_sectors: updated,
      };
    });
  };

  // 🔹 REMOVE DOMAIN (❌ CLICK)
  const handleRemoveDomain = (domainToRemove) => {
    setSupportData((prev) => ({
      ...prev,
      industry_sectors: prev.industry_sectors.filter(
        (item) => item.domain !== domainToRemove
      ),
    }));
  };

  // 🔹 SUB DOMAIN CHANGE (PER DOMAIN)
  const handleSubDomainChange = (domain, value) => {
    setSupportData((prev) => ({
      ...prev,
      industry_sectors: prev.industry_sectors.map((item) =>
        item.domain === domain
          ? { ...item, sub_domains: value }
          : item
      ),
    }));
  };

  // 🔹 SELECTED DOMAINS FOR MAIN DROPDOWN
  const selectedDomains =
    supportData.industry_sectors?.map((d) => d.domain) || [];

  return (
    <Box sx={{ border: "2px solid green", width: "100%" }}>
      {/* HEADER */}
      <Box sx={{ bgcolor: "green", p: 2 }}>
        <Typography color="white" fontWeight={600}>
          Industry Sector
        </Typography>
      </Box>

      {/* DOMAIN MULTI SELECT */}
      <Box sx={{ p: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Domain</InputLabel>
          <Select
            multiple
            value={selectedDomains}
            onChange={handleDomainChange}
            input={<OutlinedInput label="Domain" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={() => handleRemoveDomain(value)}
                    onMouseDown={(e) => e.stopPropagation()}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {DOMAINS.map((domain) => (
              <MenuItem key={domain} value={domain}>
                {domain}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Divider />

      {/* SUB DOMAIN DROPDOWNS (ONE PER DOMAIN) */}
      {supportData.industry_sectors?.map(({ domain, sub_domains }) => (
        <Box key={domain} sx={{ p: 2 }}>
          <Typography sx={{
            mb: 1, fontWeight: 600,
            color: "green",
            mb: 1,
            fontSize: "0.95rem",
          }}>
            {domain} – Sub Domains
          </Typography>

          <FormControl fullWidth>
            <InputLabel>Sub Domain</InputLabel>
            <Select
              multiple
              value={sub_domains}
              onChange={(e) =>
                handleSubDomainChange(domain, e.target.value)
              }
              input={<OutlinedInput label="Sub Domain" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {(DOMAIN_SUBDOMAIN_MAP[domain] || []).map((sub) => (
                <MenuItem key={sub} value={sub}>
                  {sub}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ))}
    </Box>
  );
}
