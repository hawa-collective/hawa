import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: "#ffffff",
    boxShadow: "1px 1px 1px #ffffff",
  },
}));

const customIcons = {
  1: {
    icon: <LooksOneIcon sx={{ fontSize: "37px", }} color="error" className="mx-3 icon-box-shadow" />,
    label: "Terrible",
  },
  2: {
    icon: <LooksTwoIcon sx={{ fontSize: "37px", }} color="error" className="mx-3 icon-box-shadow" />,
    label: "Bad",
  },
  3: {
    icon: <Looks3Icon sx={{ fontSize: "37px", }} color="warning" className="mx-3 icon-box-shadow" />,
    label: "Fair",
  },
  4: {
    icon: <Looks4Icon sx={{ fontSize: "37px", }} color="success" className="mx-3 icon-box-shadow" />,
    label: "Good",
  },
  5: {
    icon: <Looks5Icon sx={{ fontSize: "37px", }} color="success" className="mx-3 icon-box-shadow" />,
    label: "Perfect",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <div className="flex-col-center">
      <span {...other} style={{ fontSize: "13px", color: "#ffffff" }}>
        {customIcons[value].label}
      </span>
      <span {...other}>
        {customIcons[value].icon}
      </span>
    </div>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function ProductRater({
  productType,
  setProductType,
  factorName,
  onRatingChange,
}) {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const storedProductType = sessionStorage.getItem("product type");

    if (storedProductType !== productType) {
      setProductType(storedProductType);
      setRating(null);
    } else {
      const storedRating = sessionStorage.getItem(factorName);
      if (storedRating) {
        setRating(parseInt(storedRating, 10));
      }
    }
  }, [factorName, productType]);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
    if (onRatingChange) {
      onRatingChange(factorName, newValue);
    }
    sessionStorage.setItem(factorName, newValue);
  };

  return (
    <StyledRating
      name={factorName}
      value={rating}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
      onChange={handleRatingChange}
    />
  );
}

ProductRater.propTypes = {
  productType: PropTypes.string,
  setProductType: PropTypes.func.isRequired,
  factorName: PropTypes.string.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};
