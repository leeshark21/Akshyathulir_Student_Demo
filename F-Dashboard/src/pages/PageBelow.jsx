import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Sector from "../components/Components/Sector";
import SupportNeededStep from "../components/Components/SupportNeededStep";
import FacilitiesAmenitiesStep from "../components/Components/FacilitiesAmenitiesStep";
import Api from "./Api";
import { useLocation, useNavigate } from "react-router-dom";

const PageBelow = () => {

  const location = useLocation();
  const nevigate = useNavigate();

  const [supportNeeded, setSupportNeeded] = useState({
    industry_sectors: [],
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

  
  useEffect(() => {
    const id = localStorage.getItem("supportId");
    if (location.state) {
      setSupportNeeded(location.state);
    } else if (id) {
      Api.get(`/support/${id}`)
        .then(res => {
          setSupportNeeded(res.data);
        })
        .catch(err => console.error(err));
    }

  }, [location.state]);



  
  const handleSubmit = async () => {
    try {
      if (supportNeeded._id) {
        await Api.patch(`/submit/${supportNeeded._id}`, supportNeeded);
        localStorage.setItem("supportId", supportNeeded._id);
        nevigate("/reviewpage");
      } 
      else {
        const res = await Api.post("/submit", supportNeeded);
        localStorage.setItem("supportId", res.data.id);
        nevigate("/reviewpage");
      }

    } catch (error) {
      console.error("Submit Error:", error);
    }
  };


  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Typography sx={{ color: "#1E4A28", fontWeight: 600, fontSize: 19 }}>
          Incubation Center Details
        </Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Sector
          supportData={supportNeeded}
          setSupportData={setSupportNeeded}
        />
      </Box>

      <Box sx={{ my: 2 }}>
        <SupportNeededStep
          supportData={supportNeeded}
          setSupportData={setSupportNeeded}
        />

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
            Submit & Review
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PageBelow;
