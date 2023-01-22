import React from "react";

import Header from "components/Header";
import {
  Img,
  Text,
  Stack,
  Button,
  CheckBox,
  Line,
  List,
  RatingBar,
  Grid,
  Input,
} from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const CategorieswithSidebarPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/productlist");
  }
  function handleNavigate8() {
    navigate("/productlist");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[197px] md:ml-[74px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-medium mt-[1px] text-gray_500 w-[auto]"
              variant="body1"
            >
              Home
            </Text>
            <Text
              className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] text-bluegray_100 w-[auto]"
              variant="body1"
            >
              {">"}
            </Text>
            <Text
              className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[1px] text-gray_800 w-[auto]"
              variant="body1"
            >
              Categories
            </Text>
          </div>
          <Text
            className="font-bold sm:ml-[342px] md:ml-[442px] ml-[858px] sm:mt-[20px] md:mt-[26px] mt-[52px] text-gray_800 w-[auto]"
            as="h5"
            variant="h5"
          >
            Categories
          </Text>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1632px] md:ml-[76px] ml-[auto] mr-[auto] sm:mt-[29px] md:mt-[38px] mt-[75px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col justify-start pt-[2px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="flex-grow font-medium mt-[4px] text-gray_800"
                      variant="body1"
                    >
                      Filter by Price
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] mb-[1px] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                    <div className="flex flex-col justify-end py-[1px] w-[100%]">
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
                </div>
                <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
              </div>
              <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[31px] w-[100%]">
                <div className="flex flex-col justify-start pt-[2px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="flex-grow font-medium mt-[4px] text-gray_800"
                      variant="body1"
                    >
                      Filter by Rating
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] mb-[1px] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="arrowdown One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                        <div className="border-bluegray_100 border-bw3 border-solid sm:h-[10px] md:h-[13px] h-[24px] md:w-[12px] w-[24px] sm:w-[9px]"></div>
                        <Img
                          src="images/img_star1.svg"
                          className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] ml-[16px] sm:ml-[6px] md:ml-[8px] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="StarOne"
                        />
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                        <div className="border-bluegray_100 border-bw3 border-solid sm:h-[10px] md:h-[13px] h-[24px] md:w-[12px] w-[24px] sm:w-[9px]"></div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                          <Img
                            src="images/img_star1_24X24.svg"
                            className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                            alt="StarOne One"
                          />
                          <Img
                            src="images/img_star2.svg"
                            className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                            alt="StarTwo"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                        <div className="border-bluegray_100 border-bw3 border-solid sm:h-[10px] md:h-[13px] h-[24px] md:w-[12px] w-[24px] sm:w-[9px]"></div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                          <Img
                            src="images/img_star1_1.svg"
                            className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                            alt="StarOne Two"
                          />
                          <Img
                            src="images/img_star2_24X24.svg"
                            className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                            alt="StarTwo One"
                          />
                          <Img
                            src="images/img_star3.svg"
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
                              src="images/img_star1_2.svg"
                              className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                              alt="StarOne Three"
                            />
                            <Img
                              src="images/img_star2_1.svg"
                              className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                              alt="StarTwo Two"
                            />
                            <Img
                              src="images/img_star3_24X24.svg"
                              className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                              alt="StarThree One"
                            />
                            <Img
                              src="images/img_star5.svg"
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
                <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[13px] md:mt-[17px] mt-[33px] w-[100%]">
                <Text
                  className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-gray_800"
                  variant="body1"
                >
                  Filter by Brand
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] mb-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                  alt="arrowdown Two"
                />
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[13px] md:mt-[17px] mt-[33px] w-[100%]">
                <Text
                  className="flex-grow font-medium sm:mt-[1px] md:mt-[2px] mt-[5px] text-gray_800"
                  variant="body1"
                >
                  Filter by Size
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] mb-[2px] md:w-[12px] w-[24px] sm:w-[9px]"
                  alt="arrowdown Three"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[16px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
              <Grid
                className="common-pointer sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]"
                onClick={handleNavigate8}
              >
                <div
                  className="common-pointer bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[43px] w-[100%]"
                  onClick={handleNavigate3}
                >
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pl-[11px] sm:pl-[15px] pl-[22px] sm:pr-[0] md:py-[11px] py-[22px] sm:py-[8px] sm:w-[100%] w-[62%]">
                    <Img
                      src="images/img_vector_gray_800.svg"
                      className="h-[113px] sm:h-[46px] md:h-[59px] max-w-[100%] ml-[1px] mt-[1px] w-[113px] sm:w-[45px] md:w-[58px]"
                      alt="Vector"
                    />
                    <div className="flex flex-col md:ml-[19px] ml-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Jacket
                      </Text>
                      <Text
                        className="font-normal mt-[17px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[43px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pl-[12px] sm:pl-[15px] pl-[25px] sm:pr-[0] md:py-[12px] py-[25px] sm:py-[9px] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_vector_gray_800_100X110.svg"
                      className="max-w-[100%] sm:my-[1px] md:my-[2px] my-[5px] w-[34%]"
                      alt="Vector One"
                    />
                    <div className="flex flex-col md:ml-[20px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Shirt
                      </Text>
                      <Text
                        className="font-normal mt-[18px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[43px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pl-[11px] sm:pl-[15px] pl-[23px] sm:pr-[0] md:py-[11px] py-[23px] sm:py-[9px] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_vector_gray_800_113X72.svg"
                      className="max-w-[100%] md:ml-[10px] ml-[20px] sm:ml-[7px] w-[22%]"
                      alt="Vector Two"
                    />
                    <div className="flex flex-col md:ml-[30px] ml-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Pants
                      </Text>
                      <Text
                        className="font-normal mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[43px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pl-[10px] sm:pl-[15px] pl-[20px] sm:pr-[0] md:py-[10px] py-[20px] sm:py-[7px] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_vector_gray_800_113X93.svg"
                      className="max-w-[100%] ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[6px] w-[28%]"
                      alt="Vector Three"
                    />
                    <div className="flex flex-col md:ml-[23px] ml-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Skirt
                      </Text>
                      <Text
                        className="font-normal mt-[18px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[43px] w-[100%]">
                  <div className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pl-[11px] sm:pl-[15px] pl-[23px] md:py-[11px] sm:py-[15px] py-[23px] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_vector_gray_800_113X80.svg"
                      className="max-w-[100%] mb-[1px] ml-[16px] sm:ml-[6px] md:ml-[8px] w-[24%]"
                      alt="Vector Four"
                    />
                    <div className="flex flex-col md:ml-[28px] ml-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dress
                      </Text>
                      <Text
                        className="font-normal mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[43px] w-[100%]">
                  <div className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pl-[10px] sm:pl-[15px] pl-[20px] md:py-[10px] sm:py-[15px] py-[20px] sm:w-[100%] w-[67%]">
                    <Img
                      src="images/img_vector_gray_800_113X113.svg"
                      className="h-[113px] sm:h-[46px] md:h-[59px] max-w-[100%] sm:ml-[2px] md:ml-[3px] ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[6px] w-[113px] sm:w-[45px] md:w-[58px]"
                      alt="Vector Five"
                    />
                    <div className="flex flex-col md:ml-[18px] ml-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Underwear
                      </Text>
                      <Text
                        className="font-normal mt-[17px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[43px] w-[100%]">
                  <div className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pl-[11px] sm:pl-[15px] pl-[23px] md:py-[11px] sm:py-[15px] py-[23px] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_vector_gray_800_80X113.svg"
                      className="max-w-[100%] w-[34%]"
                      alt="Vector Six"
                    />
                    <div className="flex flex-col md:ml-[20px] ml-[39px] sm:mx-[0] my-[11px] sm:my-[4px] md:my-[5px] sm:px-[0] sm:w-[100%] w-[55%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Shoes
                      </Text>
                      <Text
                        className="font-normal mt-[17px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[43px] w-[100%]">
                  <div className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pl-[11px] sm:pl-[15px] pl-[23px] md:py-[11px] sm:py-[15px] py-[23px] sm:w-[100%] w-[67%]">
                    <Img
                      src="images/img_vector_gray_800_93X113.svg"
                      className="max-w-[100%] my-[10px] sm:my-[3px] md:my-[5px] w-[32%]"
                      alt="Vector Seven"
                    />
                    <div className="flex flex-col md:ml-[20px] ml-[39px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Accesories
                      </Text>
                      <Text
                        className="font-normal mt-[18px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
              </Grid>
            </div>
          </div>
          <Footer className="bg-gray_800 sm:mt-[33px] md:mt-[43px] mt-[85px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CategorieswithSidebarPage;
