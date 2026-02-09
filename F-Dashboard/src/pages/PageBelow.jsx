import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Sector from "../components/Components/Sector";
import SupportNeededStep from "../components/Components/SupportNeededStep";
import FacilitiesAmenitiesStep from "../components/Components/FacilitiesAmenitiesStep";
import Api from "./Api";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PageBelow = () => {

  const location = useLocation()

  useEffect(()=>{
    if(location.state){
      setSupportNeeded(location.state)
    }
  },[])
   



  const [supportNeeded, setSupportNeeded] = useState({
    industry_sectors: [],   // ✅ domains + sub-domains inside

    infrastructure: [],
    business_startup_support: [],
    funding_financial_support: [],
    technology_innovation: [],
    legal_compliance: [],
    government_ecosystem: [],
    workspace_comfort: [],
    connectivity_parking: [],
    common_facilities: [],
    extra_offers_incubatees: [],
  });

  /* ---------- SUBMIT ---------- */
  const nevigate = useNavigate()
  const handleSubmit = async () => {
    console.log("Sending to backend 👉", supportNeeded);

    try {
      await Api.post("/support/submit", supportNeeded);
      alert("✅ Successfully submitted");
      nevigate("/reviewpage")

    } catch (error) {
      console.error("❌ Backend error:", error);
      alert("Backend error");
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Typography sx={{ color: "#1E4A28", fontWeight: 600, fontSize: 19 }}>
          Incubation Center Details
        </Typography>
      </Box>

      <Box sx={{ my: 2,  }}>
        <Sector
          supportData={supportNeeded}
          setSupportData={setSupportNeeded}
        />
      </Box>

      <Box sx={{ my: 2 }}>
        {/* SUPPORT CHECKBOXES */}
        <SupportNeededStep
          supportData={supportNeeded}
          setSupportData={setSupportNeeded}
        />

        {/* FACILITIES CHECKBOXES */}
        <FacilitiesAmenitiesStep
          supportData={supportNeeded}
          setSupportData={setSupportNeeded}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          
         

          <Button
            onClick={handleSubmit}
            sx={{
              mt: 3,
              mb: 5,
              bgcolor: "#1E4A28",
              color: "white",
              px: 4,
              py: 1,
              "&:hover": { bgcolor: "#0f7a2a" },
            }}
          >
            Submit & review
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PageBelow;
