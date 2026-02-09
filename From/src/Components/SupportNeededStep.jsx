import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

/* ---------- CATEGORY BLOCK ---------- */
const SupportCategory = ({
  title,
  options,
  backendKey,
  supportData,
  toggleSupport,
}) => (
  <Box sx={{ mb: 3 }}>
    <Typography
      sx={{
        fontWeight: 600,
        color: "green",
        mb: 1,
        fontSize: "0.95rem",
      }}
    >
      {title}
    </Typography>

    <Grid container>
      {options.map((option) => (
        <Grid size={{xs:12,md:4}} key={option}>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={supportData[backendKey]?.includes(option) || false}
                onChange={() => toggleSupport(backendKey, option)}
              />
            }
            label={
              <Typography sx={{ fontSize: "0.875rem", color: "#555" }}>
                {option}
              </Typography>
            }
            sx={{ width: "100%" }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

/* ---------- MAIN COMPONENT ---------- */
const SupportNeededStep = ({ supportData, setSupportData }) => {
  /* UI title → backend field */
  const categoryKeyMap = {
    "Infrastructure & Facilities": "infrastructure",
    "Business & Startup Support": "business_startup_support",
    "Funding & Financial Support": "funding_financial_support",
    "Technology & Innovation": "technology_innovation",
    "Legal & Compliance": "legal_compliance",
    "Government & Ecosystem": "government_ecosystem",
  };

  const toggleSupport = (key, value) => {
    setSupportData((prev) => ({
      ...prev,
      [key]: prev[key]?.includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...(prev[key] || []), value],
    }));
  };

  const supportDataLeft = [
    {
      title: "Infrastructure & Facilities",
      options: [
        "Co-working Space",
        "Dedicated Office Space",
        "Lab / Workshop Access",
        "Equipment & Tools",
      ],
    },
    {
      title: "Business & Startup Support",
      options: [
        "Mentorship & Advisory",
        "Business Model Validation",
        "Market Access & Sales Support",
        "Customer Discovery",
      ],
    },
    {
      title: "Funding & Financial Support",
      options: [
        "Seed Funding",
        "Grants / Subsidies",
        "Investor Connect",
        "Loan / Credit Assistance",
      ],
    },
  ];

  const supportDataRight = [
    {
      title: "Technology & Innovation",
      options: [
        "Product Development Support",
        "Technology Commercialization",
        "Prototype Development",
        "Testing & Validation",
      ],
    },
    {
      title: "Legal & Compliance",
      options: [
        "Company Registration",
        "IP / Patent Filing",
        "Legal Advisory",
        "Regulatory Compliance",
      ],
    },
    {
      title: "Government & Ecosystem",
      options: [
        "Government Scheme Guidance",
        "Industry Partnerships",
        "Academic Collaboration",
        "CSR / NGO Connect",
      ],
    },
  ];

  return (
    <Box>
      <Grid container spacing={3}>
        {/* LEFT COLUMN */}
        <Grid size={12} md={6}>
          <Paper elevation={0} sx={{ border: "2px solid green", height: "100%" }}>
            <Box sx={{ bgcolor: "green", p: 2, color: "white" }}>
              <Typography fontWeight={600}>
                Type of Support Provider
              </Typography>
            </Box>

            <Box sx={{ p: 3 }}>
              {supportDataLeft.map((cat, idx) => (
                <React.Fragment key={cat.title}>
                  <SupportCategory
                    title={cat.title}
                    options={cat.options}
                    backendKey={categoryKeyMap[cat.title]}
                    supportData={supportData}
                    toggleSupport={toggleSupport}
                  />
                  {idx < supportDataLeft.length - 1 && (
                    <Divider sx={{ my: 2, borderStyle: "dashed" }} />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid size={12} md={6}>
          <Paper elevation={0} sx={{ border: "2px solid green", height: "100%" }}>
            <Box sx={{ bgcolor: "green", p: 2, color: "white" }}>
              <Typography fontWeight={600}>
                Specialized & Institutional Support
              </Typography>
            </Box>

            <Box sx={{ p: 3 }}>
              {supportDataRight.map((cat, idx) => (
                <React.Fragment key={cat.title}>
                  <SupportCategory
                    title={cat.title}
                    options={cat.options}
                    backendKey={categoryKeyMap[cat.title]}
                    supportData={supportData}
                    toggleSupport={toggleSupport}
                  />
                  {idx < supportDataRight.length - 1 && (
                    <Divider sx={{ my: 2, borderStyle: "dashed" }} />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SupportNeededStep;
