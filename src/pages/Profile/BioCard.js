import { Card, CardContent, Stack, Typography } from "@mui/material";

const BioCard = (props) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography className="memoirs" fontSize={24} fontStyle="italic">
            Who am I
          </Typography>
          <Typography className="mukta" fontSize={15}>
            {props.biodata}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BioCard;
