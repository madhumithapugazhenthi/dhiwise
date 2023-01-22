import React from "react";

import Header from "components/Header";
import {
  Img,
  Text,
  Stack,
  Button,
  Line,
  CheckBox,
  List,
  RatingBar,
  SelectBox,
  Grid,
  Input,
} from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/productdetails");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[202px] md:ml-[74px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-medium mt-[1px] text-gray_500 w-[auto]"
              variant="body1"
            >
              Home
            </Text>
            <Text
              className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] my-[1px] text-bluegray_100 w-[auto]"
              variant="body1"
            >
              {">"}
            </Text>
            <Text
              className="font-medium mb-[1px] ml-[16px] sm:ml-[6px] md:ml-[8px] text-gray_800 w-[auto]"
              variant="body1"
            >
              Product List
            </Text>
          </div>
          <Text
            className="font-bold sm:ml-[342px] md:ml-[442px] ml-[858px] sm:mt-[20px] md:mt-[26px] mt-[52px] text-gray_800 w-[auto]"
            as="h5"
            variant="h5"
          >
            Product List
          </Text>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1632px] md:ml-[74px] ml-[auto] mr-[auto] sm:mt-[27px] md:mt-[36px] mt-[70px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col justify-start sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[6px] sm:px-[0] sm:w-[100%] w-[16%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    variant="body1"
                  >
                    Categories
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
                </div>
                <div className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[31px] sm:mx-[0] pb-[1px] sm:px-[0] sm:w-[100%] w-[60%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Img
                      src="images/img_cut_32X32.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="cut"
                    />
                    <Text
                      className="flex-grow font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_500"
                      variant="body1"
                    >
                      Jacket
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Img
                      src="images/img_file.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="file"
                    />
                    <Text
                      className="flex-grow font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_800"
                      variant="body1"
                    >
                      Shirt
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                    <Img
                      src="images/img_location_32X32.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="location"
                    />
                    <Text
                      className="flex-grow font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_500"
                      variant="body1"
                    >
                      Pants
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <Img
                      src="images/img_computer_32X32.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="computer"
                    />
                    <Text
                      className="flex-grow font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_500"
                      variant="body1"
                    >
                      Shoes
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                    <Img
                      src="images/img_settings_32X32.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="settings"
                    />
                    <Text
                      className="flex-grow font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_500"
                      variant="body1"
                    >
                      Dress
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]">
                    <Img
                      src="images/img_signal_32X32.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="signal"
                    />
                    <Text
                      className="flex-grow font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_500"
                      variant="body1"
                    >
                      Accesories
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                    <Img
                      src="images/img_skirt_32X32.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="Skirt"
                    />
                    <Text
                      className="flex-grow font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_500"
                      variant="body1"
                    >
                      Skirt
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[25px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Img
                      src="images/img_arrowdown_gray_500.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="arrowdown"
                    />
                    <Text
                      className="flex-grow font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_500"
                      variant="body1"
                    >
                      View more
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
              <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                <Text
                  className="font-medium text-gray_800 w-[auto]"
                  variant="body1"
                >
                  Filter by Price
                </Text>
                <div className="flex flex-col justify-end sm:mt-[12px] md:mt-[16px] mt-[32px] py-[1px] w-[100%]">
                  <CheckBox
                    className="font-normal mt-[1px] not-italic text-[18px] text-gray_500"
                    inputClassName="h-[24px] mr-[5px] w-[24px]"
                    name="AllPrice"
                    label="All Price"
                  ></CheckBox>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mr-[auto] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <Button
                      className="flex sm:h-[10px] md:h-[13px] h-[24px] items-center justify-center md:w-[12px] w-[24px] sm:w-[9px]"
                      size="smIcn"
                      variant="icbFillGray800"
                    >
                      <Img
                        src="images/img_checkedbox.svg"
                        className="flex items-center justify-center"
                        alt="Checkedbox"
                      />
                    </Button>
                    <Text
                      className="font-normal ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-gray_800 w-[auto]"
                      variant="body1"
                    >
                      $100 - $250
                    </Text>
                  </div>
                  <CheckBox
                    className="font-normal sm:mt-[10px] md:mt-[13px] mt-[27px] not-italic text-[18px] text-gray_500"
                    inputClassName="h-[24px] mr-[5px] w-[24px]"
                    name="250500"
                    label="$250 - $500"
                  ></CheckBox>
                  <CheckBox
                    className="font-normal sm:mt-[10px] md:mt-[13px] mt-[26px] not-italic text-[18px] text-gray_500"
                    inputClassName="h-[24px] mr-[5px] w-[24px]"
                    name="7501000"
                    label="$750 - $1.000"
                  ></CheckBox>
                  <CheckBox
                    className="font-normal sm:mt-[11px] md:mt-[14px] mt-[28px] not-italic text-[18px] text-gray_500 w-[100%]"
                    inputClassName="h-[24px] mr-[5px] w-[24px]"
                    name="10001500"
                    label="$1000 - $1.500"
                  ></CheckBox>
                </div>
              </div>
              <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
              <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                <Text
                  className="font-medium text-gray_800 w-[auto]"
                  variant="body1"
                >
                  Filter by Rating
                </Text>
                <div className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                    <div className="border-bluegray_100 border-bw3 border-solid sm:h-[10px] md:h-[13px] h-[24px] md:w-[12px] w-[24px] sm:w-[9px]"></div>
                    <Img
                      src="images/img_star1_3.svg"
                      className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] ml-[16px] sm:ml-[6px] md:ml-[8px] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="StarOne"
                    />
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                    <div className="border-bluegray_100 border-bw3 border-solid sm:h-[10px] md:h-[13px] h-[24px] md:w-[12px] w-[24px] sm:w-[9px]"></div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                      <Img
                        src="images/img_star1_4.svg"
                        className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="StarOne One"
                      />
                      <Img
                        src="images/img_star2_2.svg"
                        className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="StarTwo"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <div className="border-bluegray_100 border-bw3 border-solid sm:h-[10px] md:h-[13px] h-[24px] md:w-[12px] w-[24px] sm:w-[9px]"></div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                      <Img
                        src="images/img_star1_5.svg"
                        className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="StarOne Two"
                      />
                      <Img
                        src="images/img_star2_3.svg"
                        className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="StarTwo One"
                      />
                      <Img
                        src="images/img_star3_1.svg"
                        className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                        alt="StarThree"
                      />
                    </div>
                  </div>
                  <List
                    className="gap-[16px] sm:gap-[6px] md:gap-[8px] grid min-h-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                      <Button
                        className="flex sm:h-[10px] md:h-[13px] h-[24px] items-center justify-center md:w-[12px] w-[24px] sm:w-[9px]"
                        size="smIcn"
                        variant="icbFillGray800"
                      >
                        <Img
                          src="images/img_checkedbox.svg"
                          className="flex items-center justify-center"
                          alt="Checkedbox One"
                        />
                      </Button>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                        <Img
                          src="images/img_star1_6.svg"
                          className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="StarOne Three"
                        />
                        <Img
                          src="images/img_star2_4.svg"
                          className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="StarTwo Two"
                        />
                        <Img
                          src="images/img_star3_2.svg"
                          className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="StarThree One"
                        />
                        <Img
                          src="images/img_star5_24X24.svg"
                          className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="StarFive"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <div className="border-bluegray_100 border-bw3 border-solid sm:h-[10px] md:h-[13px] h-[24px] md:w-[12px] w-[24px] sm:w-[9px]"></div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#fae952"
                          size={24}
                        ></RatingBar>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[16px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pt-[2px] w-[100%]">
                <Text
                  className="font-medium mt-[4px] text-gray_500 w-[auto]"
                  variant="body1"
                >
                  <span className="text-gray_500 text-[18px] font-poppins">
                    Viewing{" "}
                  </span>
                  <span className="text-gray_800 text-[18px] font-poppins">
                    20
                  </span>
                  <span className="text-gray_500 text-[18px] font-poppins">
                    {" "}
                    of{" "}
                  </span>
                  <span className="text-gray_800 text-[18px] font-poppins">
                    160
                  </span>
                  <span className="text-gray_500 text-[18px] font-poppins">
                    {" "}
                    product
                  </span>
                </Text>
                <SelectBox
                  className="font-normal sm:mx-[0] not-italic text-[18px] text-gray_500 sm:w-[100%] w-[18%]"
                  placeholderClassName="text-gray_500"
                  name="sort"
                  placeholder="Sort by: Newest Items"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="w-[24px] h-[24px] mr-[0] sm:h-[10px] sm:w-[9px] md:h-[13px] md:w-[12px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] sm:px-[0] w-[100%]"
                onClick={handleNavigate7}
              >
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <Grid className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-5 min-h-[auto] w-[100%]">
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_3.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Green <br />
                          Warm Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_1.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder One"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Black
                          <br />
                          Warm Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_shoesisolated.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Two"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Blue Grey <br />
                          Warm Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_4.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Three"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Blue Denim <br />
                          Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_245X245.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Four"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Purple <br />
                          Warm Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_2.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Five"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Casual <br />
                          Pink Shirt
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_rectangle39_245X245.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Six"
                      />
                      <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                        <Text
                          className="font-medium text-gray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Gray T-shirt
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_250X250.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Seven"
                      />
                      <div className="flex flex-col items-center justify-start md:mt-[10px] mt-[21px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                        <Text
                          className="font-medium text-gray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Red Flannel
                        </Text>
                        <Text
                          className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_631X384.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Eight"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Casual <br />
                          Grey Shoes
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_sportj9bzxuy.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Nine"
                      />
                      <div className="flex flex-col items-center justify-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                        <Text
                          className="font-medium text-gray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Pink Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_5.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Ten"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Black <br />
                          Warm Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_15.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Eleven"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Black
                          <br />
                          Brief Case
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_businessshirt.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Twelve"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Modern Classic
                          <br />
                          Watch
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_177X177.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Thirteen"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Blue Denim <br />
                          Skirt
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_400X521.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Fourteen"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Casual <br />
                          Classic Watch
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_16.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Fifteen"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Black Adventure
                          <br />
                          Boots
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_placeholder_6.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Sixteen"
                      />
                      <div className="flex flex-col items-center justify-start md:ml-[25px] ml-[50px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Black Formal
                          <br />
                          Highheels
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_travel8v7cnke.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Seventeen"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Brown <br />
                          Casual Shoes
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_warmpantspxl7.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Eighteen"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Gray <br />
                          Longpants
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_rectangle45.png"
                        className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                        alt="placeholder Nineteen"
                      />
                      <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                        <Text
                          className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Green
                          <br />
                          Sport Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </Grid>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[22px] md:mt-[28px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="arrowleft"
                  />
                  <Button
                    className="cursor-pointer font-normal sm:h-[20px] md:h-[26px] h-[50px] md:ml-[12px] ml-[24px] sm:ml-[9px] my-[1px] not-italic text-[18px] text-center text-white_A700 sm:w-[19px] md:w-[25px] w-[50px]"
                    size="md"
                    variant="FillGray800"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-normal sm:h-[21px] md:h-[27px] h-[51px] md:ml-[12px] ml-[24px] sm:ml-[9px] not-italic text-[18px] text-center text-gray_500 sm:w-[20px] md:w-[26px] w-[51px]"
                    size="md"
                    variant="OutlineGray500"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-normal sm:h-[21px] md:h-[27px] h-[51px] md:ml-[12px] ml-[24px] sm:ml-[9px] not-italic text-[18px] text-center text-gray_500 sm:w-[20px] md:w-[26px] w-[51px]"
                    size="md"
                    variant="OutlineGray500"
                  >
                    3
                  </Button>
                  <Img
                    src="images/img_info_24X24.svg"
                    className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:ml-[12px] ml-[24px] sm:ml-[9px] md:w-[12px] w-[24px] sm:w-[9px]"
                    alt="info"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray_800 mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
