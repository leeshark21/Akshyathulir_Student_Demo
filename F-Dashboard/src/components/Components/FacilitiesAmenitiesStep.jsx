
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PowerIcon from "@mui/icons-material/Power";
import ChairIcon from "@mui/icons-material/Chair";
import WifiIcon from "@mui/icons-material/Wifi";
import LanIcon from "@mui/icons-material/Lan";
import SchoolIcon from "@mui/icons-material/School";
import GavelIcon from "@mui/icons-material/Gavel";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CampaignIcon from '@mui/icons-material/Campaign';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import PrintIcon from '@mui/icons-material/Print';



/* ---------- Single Facility Item ---------- */
const FacilityItem = ({ icon, label, checked, onToggle }) => {
  const theme = useTheme();

  return (
    <Box
      onClick={onToggle}
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        mb: 1.5,
        cursor: "pointer",
       
      }}
    >
      <Checkbox   size="small" checked={checked} sx={{ color: "#1E4A28" }} />
      <Typography sx={{ fontSize: "0.875rem", color: "#1E4A28"  }}>
        {label}
      </Typography>
      </Box>
  );
};
const FacilitiesAmenitiesStep = ({ supportData, setSupportData }) => {
 
  const facilityKeyMap = {
    ac: "workspace_comfort",
    power: "workspace_comfort",
    seating: "workspace_comfort",

    wifi: "connectivity_parking",
    lan: "connectivity_parking",
    two_parking: "connectivity_parking",
    four_parking: "connectivity_parking",

    mentorship: "extra_offers_incubatees",
    legal: "extra_offers_incubatees",
    demo: "extra_offers_incubatees",
    scheme: "extra_offers_incubatees",

    meeting_rooms: "common_facilities",
    seminar_halls: "common_facilities",
    printing_scanning: "common_facilities",
    cafeteria_pantry: "common_facilities",

  };

 
  const toggleFacility = (frontendKey, label) => {
    const backendKey = facilityKeyMap[frontendKey];

    setSupportData((prev) => ({
  ...prev,
  [backendKey]: (prev[backendKey] || []).includes(label)
    ? prev[backendKey].filter((v) => v !== label)
    : [...(prev[backendKey] || []), label],
}));
  }


  const isChecked = (backendKey, label) =>
    supportData[backendKey]?.includes(label);

  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid size={12} sx={{ border: "2px solid #1E4A28", borderRadius: 2 }}>
          <Box sx={{ bgcolor: "#1E4A28", p: 2, color: "white" }}>
            <Typography fontWeight={600}>Amenities Provider</Typography>
          </Box>

          <Card sx={{ p: 3 }}>
            <Typography fontWeight={600} mb={2} sx={{  fontWeight: 600,
        color: "#1E4A28",
        mb: 1,
        fontSize: "0.95rem",}}>
              Workspace & Comfort
            </Typography>
            <Grid container spacing={3}>

       


              <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<AcUnitIcon />}
                  label="Air Conditioned Workspace"
                  checked={isChecked(
                    "workspace_comfort",
                    "Air Conditioned Workspace"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "ac",
                      "Air Conditioned Workspace"
                    )
                  }
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>

                <FacilityItem
                  icon={<PowerIcon />}
                  label="24x7 Power Backup"
                  checked={isChecked(
                    "workspace_comfort",
                    "24x7 Power Backup"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "power",
                      "24x7 Power Backup"
                    )
                  }
                />

              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>

                <FacilityItem
                  icon={<ChairIcon />}
                  label="Comfortable Seating"
                  checked={isChecked(
                    "workspace_comfort",
                    "Comfortable Seating"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "seating",
                      "Comfortable Seating"
                    )
                  }
                />

              </Grid>
            </Grid>

            
            <Typography fontWeight={600} mb={2} sx={{  fontWeight: 600,
        color: "#1E4A28",
        mb: 1,
        fontSize: "0.95rem",}}>
              Connectivity & Parking
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<WifiIcon />}
                  label="High-Speed Wi-Fi"
                  checked={isChecked(
                    "connectivity_parking",
                    "High-Speed Wi-Fi"
                  )}
                  onToggle={() =>
                    toggleFacility("wifi", "High-Speed Wi-Fi")
                  }
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<LanIcon />}
                  label="LAN / Ethernet"
                  checked={isChecked(
                    "connectivity_parking",
                    "LAN / Ethernet"
                  )}
                  onToggle={() =>
                    toggleFacility("lan", "LAN / Ethernet")
                  }
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<TwoWheelerIcon />}
                  label="Two Wheeler Parking"
                  checked={isChecked(
                    "connectivity_parking",
                    "twowheelerparking"
                  )}
                  onToggle={() =>
                    toggleFacility("two_parking", "twowheelerparking")
                  }
                />

              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<DirectionsCarIcon />}
                  label="Four Wheeler Parking"
                  checked={isChecked(
                    "connectivity_parking",
                    "fourwheelerparking"
                  )}
                  onToggle={() =>
                    toggleFacility("four_parking", "fourwheelerparking")
                  }
                />

              </Grid>
            </Grid>




          </Card>
        </Grid>

        {/* ---------- Common Facilities ---------- */}
        <Grid size={12} sx={{ border: "2px solid #1E4A28", borderRadius: 2 }}>
          <Box sx={{ bgcolor: "#1E4A28", p: 2, color: "white" }}>
            <Typography fontWeight={600}>
              Additional Services & Support
            </Typography>
          </Box>
          <Card sx={{ p: 3 }}>
            <Typography fontWeight={600} mb={2} sx={{  fontWeight: 600,
        color: "#1E4A28",
        mb: 1,
        fontSize: "0.95rem",}}>
              Common Facilities
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<MeetingRoomIcon />}
                  label="Meeting Rooms"
                  checked={isChecked(
                    "common_facilities",
                    "Meeting Rooms"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "meeting_rooms",
                      "Meeting Rooms"
                    )
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<InsertInvitationIcon />}
                  label="Seminar Halls"
                  checked={isChecked(
                    "common_facilities",
                    "Seminar Halls"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "seminar_halls",
                      "Seminar Halls"
                    )
                  }
                />
              </Grid>
               <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<PrintIcon />}
                  label="Printing & Scanning Services"
                  checked={isChecked(
                    "common_facilities",
                    "Printing & Scanning Services"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "printing_scanning",
                      "Printing & Scanning Services"
                    )
                  }
                />
              </Grid>
               <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<FreeBreakfastIcon />}
                  label="Cafeteria / Pantry"
                  checked={isChecked(
                    "common_facilities",
                    "Cafeteria / Pantry"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "cafeteria_pantry",
                      "Cafeteria / Pantry"
                    )
                  }
                />
              </Grid>
            </Grid>



          </Card>

          <Card sx={{ p: 3 }}>
            <Typography fontWeight={600} mb={2}  sx={{  fontWeight: 600,
        color: "#1E4A28",
        mb: 1,
        fontSize: "0.95rem",}}>
              Extra Offer for Incubatees
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<SchoolIcon />}
                  label="Free Mentorship Sessions"
                  checked={isChecked(
                    "extra_offers_incubatees",
                    "Free Mentorship Sessions"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "mentorship",
                      "Free Mentorship Sessions"
                    )
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<GavelIcon />}
                  label="Legal Consultation Support"
                  checked={isChecked(
                    "extra_offers_incubatees",
                    "Legal Consultation Support"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "legal",
                      "Legal Consultation Support"
                    )
                  }
                />
              </Grid>
               <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<BusinessCenterIcon />}
                  label="Investor Demo Day Access"
                  checked={isChecked(
                    "extra_offers_incubatees",
                    "Investor Demo Day Acccess"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "demo",
                      "Investor Demo Day Acccess"
                    )
                  }
                />
              </Grid>
               <Grid size={{ xs: 12, md: 4 }}>
                <FacilityItem
                  icon={<CampaignIcon />}
                  label="Govt. Scheme Awareness"
                  checked={isChecked(
                    "extra_offers_incubatees",
                    "Govt Scheme Awareness"
                  )}
                  onToggle={() =>
                    toggleFacility(
                      "scheme",
                      "Govt Scheme Awareness"
                    )
                  }
                />
              </Grid>
            </Grid>



          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default FacilitiesAmenitiesStep;
