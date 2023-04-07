import * as React from "react";


const StaffCards = ({ name, info, image, load }) => {
  return (
    <div className="staffcards">
      <Card sx={{ maxWidth: 300, maxHeight: 430 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="230"
            image={image}
            alt="green iguana"
          />
          <CardContent className="cardcolor">
            <Typography
              className="name"
              gutterBottom
              sx={{ fontSize: 18 }}
              component="div"
            >
              <h2>{name}</h2>
            </Typography>
            <Typography
              className="load"
              gutterBottom
              sx={{ fontSize: 10 }}
              component="div"
            >
              <h2>{load}</h2>
            </Typography>
            <Typography className="info" variant="body2">
              <p>{info}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default StaffCards;
