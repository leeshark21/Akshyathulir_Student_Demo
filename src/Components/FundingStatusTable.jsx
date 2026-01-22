import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const rows = [
  {
    name: "EcoTech Innovations",
    allocated: "$1,500,000",
    used: "$900,000",
    remaining: "$600,000",
    status: "On Track",
  },
  {
    name: "AgriFuture Tech",
    allocated: "$750,000",
    used: "$300,000",
    remaining: "$450,000",
    status: "Needs Attention",
  },
];

export default function FundingStatusTable() {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography fontWeight="bold" mb={2}>
          Startup Funding Status
        </Typography>

        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#e8f5e9" }}>
              <TableCell>Startup</TableCell>
              <TableCell>Allocated</TableCell>
              <TableCell>Used</TableCell>
              <TableCell>Remaining</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.allocated}</TableCell>
                <TableCell>{row.used}</TableCell>
                <TableCell>{row.remaining}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={
                      row.status === "On Track" ? "success" : "warning"
                    }
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box textAlign="center" mt={2}>
          <Button variant="outlined" color="success">
            Load More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}