import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function FrontDisplay({ frontImage, description }) {
  return (
    <Card style={{ backgroundColor: "rgb(186, 180, 49)" }}>
      <CardMedia
        component="img"
        height="200"
        image={frontImage}
        alt="no image loaded"
      />
      <CardContent>
        <p>Description: { description } </p>
      </CardContent>
    </Card>
  );
}

export default FrontDisplay;
