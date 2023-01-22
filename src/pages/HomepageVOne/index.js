import React from "react";

import {
  Img,
  Text,
  Button,
  Stack,
  PagerIndicator,
  Grid,
  List,
  RatingBar,
  Input,
} from "components";
import { handleSectionNavigation } from "util";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const HomepageVOnePage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate2() {
    navigate("/homepagevtwo");
  }
  function handleNavigate11() {
    navigate("/categorieswithsidebar");
  }
  function handleNavigate12() {
    navigate("/homepagevtwo");
  }
  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] p-[17px] md:p-[8px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1632px] mb-[1px] md:ml-[65px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                <Img
                  src="images/img_volume.svg"
                  className="common-pointer flex-shrink-0 max-w-[100%] w-[35%]"
                  onClick={handleBackNavigation}
                  alt="volume"
                />
                <Text
                  className="common-pointer flex-grow font-bold sm:ml-[3px] md:ml-[4px] ml-[8px] text-gray_800"
                  as="h6"
                  variant="h6"
                  onClick={googleSignIn}
                >
                  Elliye{" "}
                </Text>
              </div>
              <div
                className="flex flex-row md:flex-wrap sm:flex-wrap md:ml-[202px] ml-[392px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%] common-row-list"
                id="block1"
              >
                <ul className="flex flex-row items-start justify-center">
                  <li className="w-[auto] mt-[1px] sm:w-[100%] sm:my-[10px]">
                    <a
                      href={"javascript:"}
                      className="common-pointer cursor-pointer font-medium text-[18px] text-gray_800"
                      onClick={handleNavigate11}
                      rel="noreferrer"
                    >
                      Categories
                    </a>
                  </li>
                  <li className="w-[auto] mb-[4px] ml-[80px] sm:ml-[31px] sm:w-[100%] sm:my-[10px] md:ml-[41px]">
                    <a
                      href={"javascript:"}
                      className="common-pointer cursor-pointer font-medium text-[18px] text-gray_800"
                      onClick={handleNavigate2}
                      rel="noreferrer"
                    >
                      New Arrival
                    </a>
                  </li>
                  <li className="w-[auto] mt-[1px] mb-[4px] ml-[80px] sm:ml-[31px] sm:w-[100%] sm:my-[10px] md:ml-[41px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[18px] text-gray_800"
                      id="block2"
                      rel="noreferrer"
                    >
                      Features
                    </a>
                  </li>
                  <li className="w-[auto] mb-[4px] ml-[80px] sm:ml-[31px] sm:w-[100%] sm:my-[10px] md:ml-[41px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[18px] text-gray_800"
                      rel="noreferrer"
                    >
                      Collections
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[133px] ml-[259px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                <Img
                  src="images/img_car.svg"
                  className="max-w-[100%] w-[33%]"
                  alt="car"
                />
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[18px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate12}
                  size="lg"
                  variant="FillGray800"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <Stack className="bg-gray_50 h-[700px] pl-[144px] sm:pl-[15px] md:pl-[74px] relative w-[100%]">
            <Stack className="absolute h-[700px] sm:w-[100%] w-[93%]">
              <div className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[69%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_placeholder.png"
                      className="max-w-[100%] w-[32%]"
                      alt="placeholder"
                    />
                    <Img
                      src="images/img_placeholder_364X837.png"
                      className="max-w-[100%] sm:w-[100%] w-[69%]"
                      alt="placeholder One"
                    />
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[18px] p-[36px] sm:w-[100%] w-[32%]"
                      style={{
                        backgroundImage: "url('images/img_group2278.png')",
                      }}
                    >
                      <PagerIndicator
                        className="h-[12px] sm:mr-[12px] md:mr-[16px] mr-[31px] sm:mt-[100px] md:mt-[130px] mt-[252px] w-[max-content]"
                        count={6}
                        activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700"
                        selectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[1px]"
                        unselectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[1px]"
                      />
                    </div>
                    <Img
                      src="images/img_placeholder_336X384.png"
                      className="max-w-[100%] w-[32%]"
                      alt="placeholder Two"
                    />
                    <Stack
                      className="bg-cover bg-no-repeat h-[336px] pt-[144px] sm:pt-[15px] md:pt-[74px] px-[144px] sm:px-[15px] md:px-[74px] relative w-[38%]"
                      style={{
                        backgroundImage: "url('images/img_group2279.png')",
                      }}
                    >
                      <Img
                        src="images/img_button.svg"
                        className="absolute h-[48px] inset-x-[0] max-w-[100%] mx-[auto] w-[36%]"
                        alt="button"
                      />
                    </Stack>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start left-[0] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[32%]">
                <Text
                  className="font-playfairdisplay not-italic text-gray_800 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Summer Sale
                </Text>
                <Text
                  className="font-poppins md:mt-[10px] mt-[21px] sm:mt-[8px] text-gray_800 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  50% Off
                </Text>
                <Text
                  className="font-normal font-poppins leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:mx-[0] not-italic text-gray_800 sm:w-[100%] w-[93%]"
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </Text>
                <Button
                  className="flex items-center justify-center md:mt-[28px] min-w-[44%] mt-[56px] sm:mt-[22px] text-center w-[max-content]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[10px] sm:ml-[3px] md:ml-[5px] text-center"
                      alt="arrow_right"
                    />
                  }
                  size="md"
                  variant="FillGray800"
                >
                  <div className="bg-transparent cursor-pointer font-medium font-poppins sm:text-[20px] md:text-[22px] text-[24px] text-white_A700">
                    Shop Now
                  </div>
                </Button>
              </div>
            </Stack>
          </Stack>
          <div className="flex flex-col items-center justify-start max-w-[1633px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] pt-[11px] sm:pt-[4px] md:pt-[5px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] w-[100%]">
              <Text
                className="font-bold text-gray_800 w-[auto]"
                as="h5"
                variant="h5"
              >
                Categories
              </Text>
              <div className="flex flex-col items-center justify-start sm:mt-[1px] md:mt-[2px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                <Text
                  className="font-medium text-gray_800 w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
              <div className="bg-gray_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[50px] sm:w-[100%] w-[16%]">
                <div className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                  <Img
                    src="images/img_vector.svg"
                    className="sm:h-[28px] md:h-[36px] h-[68px] max-w-[100%] sm:w-[27px] md:w-[35px] w-[68px]"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal sm:mt-[10px] md:mt-[13px] mt-[26px] not-italic text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Jacket
                  </Text>
                </div>
              </div>
              <div className="bg-gray_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[50px] sm:w-[100%] w-[16%]">
                <div className="flex flex-col items-center justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                  <Img
                    src="images/img_file.svg"
                    className="max-w-[100%] w-[100%]"
                    alt="file"
                  />
                  <Text
                    className="font-normal sm:mt-[11px] md:mt-[15px] mt-[30px] not-italic text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Shirt
                  </Text>
                </div>
              </div>
              <div className="bg-gray_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[50px] sm:w-[100%] w-[16%]">
                <div className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                  <Img
                    src="images/img_vector_68X43.svg"
                    className="max-w-[100%] sm:w-[100%] w-[85%]"
                    alt="Vector One"
                  />
                  <Text
                    className="font-normal sm:mt-[10px] md:mt-[13px] mt-[26px] not-italic text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Pants
                  </Text>
                </div>
              </div>
              <div className="bg-gray_800 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[50px] sm:w-[100%] w-[16%]">
                <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                  <Img
                    src="images/img_cut.svg"
                    className="max-w-[100%] w-[100%]"
                    alt="cut"
                  />
                  <Text
                    className="font-normal sm:mt-[14px] md:mt-[18px] mt-[36px] not-italic text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    Shoes
                  </Text>
                </div>
              </div>
              <div className="bg-gray_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[50px] sm:w-[100%] w-[16%]">
                <div className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                  <Img
                    src="images/img_vector_68X48.svg"
                    className="max-w-[100%] sm:w-[100%] w-[96%]"
                    alt="Vector Two"
                  />
                  <Text
                    className="font-normal sm:mt-[10px] md:mt-[13px] mt-[26px] not-italic text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Dress
                  </Text>
                </div>
              </div>
              <div className="bg-gray_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[50px] sm:w-[100%] w-[16%]">
                <div className="flex flex-col items-center justify-start sm:mt-[1px] md:mt-[2px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                  <Img
                    src="images/img_globe.svg"
                    className="max-w-[100%] sm:w-[100%] w-[70%]"
                    alt="globe"
                  />
                  <Text
                    className="font-normal sm:mt-[12px] md:mt-[16px] mt-[32px] not-italic text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Accesories
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1632px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:pt-[2px] md:pt-[3px] pt-[7px] sm:px-[0] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text
                  className="font-bold text-gray_800 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  New Arrivals
                </Text>
                <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    variant="body1"
                  >
                    View all
                  </Text>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[16px] md:mt-[21px] mt-[42px] w-[100%]">
                <div className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[14px] sm:p-[15px] p-[28px] sm:w-[100%] w-[50%]">
                  <Img
                    src="images/img_placeholder_631X384.png"
                    className="max-w-[100%] sm:ml-[13px] md:ml-[17px] ml-[33px] sm:w-[100%] w-[52%]"
                    alt="placeholder Three"
                  />
                  <div className="flex flex-col items-center md:ml-[24px] ml-[48px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] sm:w-[100%] w-[33%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Purple Warm Jacket
                      </Text>
                      <Text
                        className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        $299
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold min-w-[82%] sm:mt-[11px] md:mt-[14px] mt-[28px] text-[18px] text-center text-white_A700 w-[max-content]"
                      size="lg"
                      variant="FillGray800"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                  <Grid className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                    <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[32px] w-[100%]">
                      <Img
                        src="images/img_placeholder_177X177.png"
                        className="h-[177px] sm:h-[71px] md:h-[92px] max-w-[100%] w-[177px] sm:w-[70px] md:w-[91px]"
                        alt="placeholder Four"
                      />
                      <div className="flex flex-col items-center justify-start mb-[4px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-medium text-gray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Blue Grey Warm Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[32px] w-[100%]">
                      <Img
                        src="images/img_placeholder_1.png"
                        className="h-[177px] sm:h-[71px] md:h-[92px] max-w-[100%] w-[177px] sm:w-[70px] md:w-[91px]"
                        alt="placeholder Five"
                      />
                      <div className="flex flex-col items-center justify-start mb-[4px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                        <Text
                          className="font-medium text-gray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Denim Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[32px] w-[100%]">
                      <Img
                        src="images/img_placeholder_2.png"
                        className="h-[177px] sm:h-[71px] md:h-[92px] max-w-[100%] w-[177px] sm:w-[70px] md:w-[91px]"
                        alt="placeholder Six"
                      />
                      <div className="flex flex-col items-center justify-start mb-[4px] md:mt-[10px] mt-[21px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-medium text-gray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Black Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[32px] w-[100%]">
                      <Img
                        src="images/img_placeholder_3.png"
                        className="h-[177px] sm:h-[71px] md:h-[92px] max-w-[100%] w-[177px] sm:w-[70px] md:w-[91px]"
                        alt="placeholder Seven"
                      />
                      <div className="flex flex-col items-center justify-start mb-[4px] md:mt-[10px] mt-[21px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Text
                          className="font-medium text-gray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Green Polar Jacket
                        </Text>
                        <Text
                          className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                          variant="body1"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1632px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Text
                className="font-bold text-gray_800 w-[auto]"
                as="h5"
                variant="h5"
              >
                Featured
              </Text>
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                <Text
                  className="font-medium text-gray_800 w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[16px] md:mt-[21px] mt-[41px] w-[100%]">
              <div className="border-2 border-gray_800 border-solid flex flex-col items-center sm:mx-[0] md:p-[22px] p-[43px] sm:px-[15px] sm:py-[17px] sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_placeholder_250X250.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="placeholder Eight"
                />
                <div className="flex flex-col items-center justify-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Black Briefcase
                  </Text>
                  <Text
                    className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[68%] md:mt-[10px] mt-[20px] sm:mt-[7px] text-[18px] text-center text-white_A700 w-[max-content]"
                  size="lg"
                  variant="FillGray800"
                >
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-col items-center sm:mx-[0] md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_placeholder_4.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="placeholder Nine"
                />
                <div className="flex flex-col items-center justify-start sm:mx-[0] my-[19px] sm:my-[7px] md:my-[9px] sm:px-[0] sm:w-[100%] w-[45%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Pink Shirt
                  </Text>
                  <Text
                    className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <List
                className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[50%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-center mb-[1px] md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                  <Img
                    src="images/img_placeholder_5.png"
                    className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                    alt="placeholder Ten"
                  />
                  <div className="flex flex-col items-center justify-start mb-[18px] sm:mb-[7px] md:mb-[9px] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
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
                <div className="flex flex-col items-center justify-center mt-[1px] md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                  <Img
                    src="images/img_placeholder_6.png"
                    className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                    alt="placeholder Eleven"
                  />
                  <div className="flex flex-col items-center justify-start mb-[18px] sm:mb-[7px] md:mb-[9px] md:mt-[10px] mt-[21px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
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
              </List>
            </div>
            <Grid className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
              <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                <Img
                  src="images/img_placeholder_3.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="stylishblacks"
                />
                <div className="flex flex-col items-center justify-start mb-[18px] sm:mb-[7px] md:mb-[9px] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Black Highheels
                  </Text>
                  <Text
                    className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                <Img
                  src="images/img_placeholder_631X384.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="casualfabrics"
                />
                <div className="flex flex-col items-center justify-start mb-[18px] sm:mb-[7px] md:mb-[9px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Casual Grey Shoes
                  </Text>
                  <Text
                    className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                <Img
                  src="images/img_shoesisolated.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="shoesisolated"
                />
                <div className="flex flex-col items-center justify-start mb-[18px] sm:mb-[7px] md:mb-[9px] md:mt-[10px] mt-[21px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Brown Shoes
                  </Text>
                  <Text
                    className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                <Img
                  src="images/img_businessshirt.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="businessshirt"
                />
                <div className="flex flex-col items-center justify-start sm:mx-[0] my-[19px] sm:my-[7px] md:my-[9px] sm:px-[0] sm:w-[100%] w-[67%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Business Shirt
                  </Text>
                  <Text
                    className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                <Img
                  src="images/img_warmpantspxl7.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="warmpantsPXLSeven"
                />
                <div className="flex flex-col items-center justify-start mb-[18px] sm:mb-[7px] md:mb-[9px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Grey Warm Pants
                  </Text>
                  <Text
                    className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                <Img
                  src="images/img_sportj9bzxuy.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="sportJ9BZXUY"
                />
                <div className="flex flex-col items-center justify-start mb-[18px] sm:mb-[7px] md:mb-[9px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Green Sport Jacket
                  </Text>
                  <Text
                    className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                <Img
                  src="images/img_travel8v7cnke.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="travel8V7CNKE"
                />
                <div className="flex flex-col items-center justify-start mb-[18px] sm:mb-[7px] md:mb-[9px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Purple Warm Jacket
                  </Text>
                  <Text
                    className="font-medium mt-[12px] sm:mt-[4px] md:mt-[6px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                <Img
                  src="images/img_placeholder_1.png"
                  className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                  alt="womensdenimsk"
                />
                <div className="flex flex-col items-center justify-start sm:mx-[0] my-[19px] sm:my-[7px] md:my-[9px] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Text
                    className="font-medium text-gray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Woman Denim Skirt
                  </Text>
                  <Text
                    className="font-medium mt-[19px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
            </Grid>
          </div>
          <Stack className="h-[544px] sm:mt-[29px] md:mt-[38px] mt-[74px] relative w-[100%]">
            <div className="absolute bg-gray_800 flex flex-col justify-start sm:p-[15px] md:p-[26px] p-[52px] top-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start sm:mb-[113px] md:mb-[146px] mb-[284px] md:ml-[46px] ml-[91px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                <Text
                  className="font-bold text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Summer Collections
                </Text>
              </div>
            </div>
            <Stack className="absolute bottom-[0] h-[400px] inset-x-[0] mx-[auto] sm:w-[100%] w-[87%]">
              <List
                className="absolute sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] right-[2%] sm:w-[100%] w-[99%]"
                orientation="horizontal"
              >
                <div className="bg-bluegray_100 flex flex-col items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col justify-center sm:p-[15px] md:p-[30px] p-[59px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group2280.png')",
                    }}
                  >
                    <Text
                      className="font-normal leading-[normal] sm:mx-[0] sm:my-[34px] md:my-[44px] my-[87px] not-italic text-gray_800 sm:w-[100%] w-[47%]"
                      as="h5"
                      variant="h5"
                    >
                      <span className="text-gray_800 text-[36px] font-poppins sm:text-[32px] md:text-[34px]">
                        Summer <br />
                      </span>
                      <span className="text-gray_800 text-[36px] font-poppins font-bold sm:text-[32px] md:text-[34px]">
                        Collection
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-bluegray_100 flex flex-col items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col justify-center sm:p-[15px] md:p-[27px] p-[53px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group2278.png')",
                    }}
                  >
                    <Text
                      className="font-normal leading-[normal] sm:mx-[0] sm:my-[37px] md:my-[48px] my-[93px] not-italic text-white_A700 sm:w-[100%] w-[46%]"
                      as="h5"
                      variant="h5"
                    >
                      <span className="text-white_A700 text-[36px] font-poppins sm:text-[32px] md:text-[34px]">
                        Casual <br />
                      </span>
                      <span className="text-white_A700 text-[36px] font-poppins font-bold sm:text-[32px] md:text-[34px]">
                        Collection
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-bluegray_100 flex flex-col items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col justify-center sm:p-[15px] md:p-[26px] p-[52px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_placeholder.png')",
                    }}
                  >
                    <Text
                      className="font-normal leading-[normal] sm:mx-[0] sm:my-[37px] md:my-[48px] my-[94px] not-italic text-white_A700 sm:w-[100%] w-[45%]"
                      as="h5"
                      variant="h5"
                    >
                      <span className="text-white_A700 text-[36px] font-poppins sm:text-[32px] md:text-[34px]">
                        Big Vibe <br />
                      </span>
                      <span className="text-white_A700 text-[36px] font-poppins font-bold sm:text-[32px] md:text-[34px]">
                        Collection
                      </span>
                    </Text>
                  </div>
                </div>
              </List>
              <Button
                className="absolute flex sm:h-[24px] md:h-[31px] h-[60px] inset-y-[0] items-center justify-center my-[auto] sm:w-[23px] md:w-[30px] w-[60px]"
                size="mdIcn"
                variant="icbFillWhiteA700"
              >
                <Img
                  src="images/img_menu.svg"
                  className="flex items-center justify-center"
                  alt="menu"
                />
              </Button>
            </Stack>
          </Stack>
          <div className="flex flex-col items-center justify-start max-w-[1632px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] pt-[11px] sm:pt-[4px] md:pt-[5px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
              <Text
                className="font-bold text-gray_800 w-[auto]"
                as="h5"
                variant="h5"
              >
                Popular This Week
              </Text>
              <div className="flex flex-col items-center justify-start sm:mt-[1px] md:mt-[2px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                <Text
                  className="font-medium text-gray_800 w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
              </div>
            </div>
            <Grid className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px] w-[100%]">
                <Img
                  src="images/img_placeholder_175X225.png"
                  className="max-w-[100%] ml-[1px] sm:w-[100%] w-[47%]"
                  alt="placeholder Twelve"
                />
                <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] sm:pt-[1px] md:pt-[2px] pt-[5px] sm:px-[0] sm:w-[100%] w-[46%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Checkered Jacket
                    </Text>
                    <Text
                      className="font-medium mt-[14px] sm:mt-[5px] md:mt-[7px] text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px] w-[100%]">
                <Img
                  src="images/img_placeholder_7.png"
                  className="max-w-[100%] ml-[1px] sm:w-[100%] w-[48%]"
                  alt="placeholder Thirteen"
                />
                <div className="flex flex-col ml-[16px] md:ml-[8px] md:mr-[28px] mr-[55px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] sm:w-[100%] w-[38%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Elegant Jacket
                    </Text>
                    <Text
                      className="font-medium sm:mt-[3px] md:mt-[4px] mt-[8px] text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end p-[18px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Img
                  src="images/img_placeholder_8.png"
                  className="max-w-[100%] my-[4px] sm:w-[100%] w-[47%]"
                  alt="placeholder Fourteen"
                />
                <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[50%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Blue Woman Denim
                    </Text>
                    <Text
                      className="font-medium mt-[15px] sm:mt-[5px] md:mt-[7px] text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px] w-[100%]">
                <Img
                  src="images/img_placeholder_9.png"
                  className="max-w-[100%] ml-[1px] sm:w-[100%] w-[47%]"
                  alt="placeholder Fifteen"
                />
                <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] sm:w-[100%] w-[36%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Orange Jeans
                    </Text>
                    <Text
                      className="font-medium sm:mt-[3px] md:mt-[4px] mt-[8px] text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px] w-[100%]">
                <Img
                  src="images/img_placeholder_10.png"
                  className="max-w-[100%] ml-[1px] sm:w-[100%] w-[48%]"
                  alt="placeholder Sixteen"
                />
                <div className="flex flex-col ml-[16px] md:ml-[8px] md:mr-[42px] mr-[82px] sm:mx-[0] sm:pt-[1px] md:pt-[2px] pt-[5px] sm:px-[0] sm:w-[100%] w-[32%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Blue Jeans
                    </Text>
                    <Text
                      className="font-medium mt-[14px] sm:mt-[5px] md:mt-[7px] text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[11px] mt-[22px] sm:mt-[8px] w-[100%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px] w-[100%]">
                <Img
                  src="images/img_placeholder_11.png"
                  className="max-w-[100%] ml-[1px] sm:w-[100%] w-[47%]"
                  alt="placeholder Seventeen"
                />
                <div className="flex flex-col ml-[16px] md:ml-[8px] md:mr-[42px] mr-[83px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] sm:w-[100%] w-[32%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Gray Watch
                    </Text>
                    <Text
                      className="font-medium sm:mt-[3px] md:mt-[4px] mt-[8px] text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[11px] mt-[22px] sm:mt-[8px] w-[100%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px] w-[100%]">
                <Img
                  src="images/img_placeholder_12.png"
                  className="max-w-[100%] ml-[1px] sm:w-[100%] w-[47%]"
                  alt="placeholder Eighteen"
                />
                <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] sm:w-[100%] w-[47%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Black Sport Jacket
                    </Text>
                    <Text
                      className="font-medium sm:mt-[3px] md:mt-[4px] mt-[8px] text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px] w-[100%]">
                <Img
                  src="images/img_placeholder_13.png"
                  className="max-w-[100%] ml-[1px] sm:w-[100%] w-[48%]"
                  alt="placeholder Nineteen"
                />
                <div className="flex flex-col ml-[16px] md:ml-[8px] md:mr-[42px] mr-[82px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[32%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Wristwatch
                    </Text>
                    <Text
                      className="font-medium mt-[15px] sm:mt-[5px] md:mt-[7px] text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[11px] mt-[22px] sm:mt-[8px] w-[100%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px] w-[100%]">
                <Img
                  src="images/img_placeholder_14.png"
                  className="max-w-[100%] ml-[1px] sm:w-[100%] w-[47%]"
                  alt="placeholder Twenty"
                />
                <div className="flex flex-col ml-[16px] md:ml-[8px] md:mr-[32px] mr-[62px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[37%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Classic Watch
                    </Text>
                    <Text
                      className="font-medium mt-[15px] sm:mt-[5px] md:mt-[7px] text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $299
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
          <div className="flex flex-col justify-start mt-[113px] sm:mt-[45px] md:mt-[58px] w-[100%]">
            <Text
              className="font-bold ml-[144px] sm:ml-[57px] md:ml-[74px] text-gray_800 w-[auto]"
              as="h5"
              variant="h5"
            >
              Why Choose Us
            </Text>
            <div className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[32px] px-[144px] sm:px-[15px] md:px-[74px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1632px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-col sm:h-[154px] md:h-[199px] h-[384px] items-center sm:px-[15px] md:px-[32px] px-[63px] sm:w-[153px] md:w-[198px] w-[384px]">
                  <Stack className="border-2 border-gray_500 border-solid h-[120px] md:p-[13px] p-[27px] sm:px-[15px] sm:py-[10px] relative rounded-radius50 w-[120px] sm:w-[47px] md:w-[61px]">
                    <Img
                      src="images/img_music.svg"
                      className="absolute h-[65px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[25px] md:w-[33px] w-[65px]"
                      alt="music"
                    />
                  </Stack>
                  <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                    <Text
                      className="font-bold text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Free Delivery
                    </Text>
                    <Text
                      className="font-normal leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-center text-gray_500 w-[100%]"
                      variant="body1"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:ml-[12px] md:ml-[16px] ml-[32px] sm:w-[100%] w-[75%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col sm:h-[154px] md:h-[199px] h-[384px] items-center justify-start sm:px-[15px] md:px-[32px] px-[63px] w-[100%]">
                    <Stack className="border-2 border-gray_500 border-solid h-[120px] md:p-[14px] p-[28px] sm:px-[15px] sm:py-[11px] relative rounded-radius50 w-[120px] sm:w-[47px] md:w-[61px]">
                      <Img
                        src="images/img_computer.svg"
                        className="absolute h-[64px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[25px] md:w-[33px] w-[64px]"
                        alt="computer"
                      />
                    </Stack>
                    <div className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Payment Method
                      </Text>
                      <Text
                        className="font-normal leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-center text-gray_500 w-[100%]"
                        variant="body1"
                      >
                        This free shipping
                        <br />
                        only for selected region
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col sm:h-[154px] md:h-[199px] h-[384px] items-center justify-start sm:px-[15px] md:px-[32px] px-[63px] w-[100%]">
                    <Stack className="border-2 border-gray_500 border-solid h-[120px] md:p-[13px] p-[27px] sm:px-[15px] sm:py-[10px] relative rounded-radius50 w-[120px] sm:w-[47px] md:w-[61px]">
                      <Img
                        src="images/img_clock.svg"
                        className="absolute h-[64px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[25px] md:w-[33px] w-[64px]"
                        alt="clock"
                      />
                    </Stack>
                    <div className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Warranty
                      </Text>
                      <Text
                        className="font-normal leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-center text-gray_500 w-[100%]"
                        variant="body1"
                      >
                        This free shipping
                        <br />
                        only for selected region
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col sm:h-[154px] md:h-[199px] h-[384px] items-center justify-start sm:px-[15px] md:px-[32px] px-[63px] w-[100%]">
                    <Stack className="border-2 border-gray_500 border-solid h-[120px] md:p-[13px] p-[27px] sm:px-[15px] sm:py-[10px] relative rounded-radius50 w-[120px] sm:w-[47px] md:w-[61px]">
                      <Img
                        src="images/img_music_65X65.svg"
                        className="absolute h-[65px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[25px] md:w-[33px] w-[65px]"
                        alt="music One"
                      />
                    </Stack>
                    <div className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                      <Text
                        className="font-bold text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Customer Support{" "}
                      </Text>
                      <Text
                        className="font-normal leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] not-italic text-center text-gray_500 sm:w-[100%] w-[93%]"
                        variant="body1"
                      >
                        This free shipping
                        <br />
                        only for selected region
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Img
            src="images/img_brand.svg"
            className="max-w-[969px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            alt="brand"
          />
          <footer className="bg-gray_800 mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]">
            <div className="flex flex-col justify-start max-w-[1540px] sm:mb-[12px] md:mb-[16px] mb-[32px] md:ml-[74px] ml-[auto] md:mr-[121px] mr-[auto] sm:mt-[25px] md:mt-[33px] mt-[64px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%] common-column-list">
                  <ul className="flex flex-col">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-white_A700"
                        as="h6"
                        variant="h6"
                      >
                        Join our Newsletter
                      </Text>
                    </li>
                    <li className="w-[auto] mt-[31px] sm:mt-[12px] md:mt-[16px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal leading-[normal] not-italic text-[18px] text-white_A700"
                        rel="noreferrer"
                      >
                        Drop your email below to get update about us, <br />
                        lastest news, tips, and more!
                      </a>
                    </li>
                    <li className="w-[91%] mt-[35px] sm:mt-[13px] sm:w-[100%] sm:mx-[0] md:mt-[18px]">
                      <Input
                        className="cursor-pointer font-normal not-italic p-[0] text-[18px] placeholder:text-gray_500_87 text-gray_500_87 tracking-ls036 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[91%]"
                        type="email"
                        name="input"
                        placeholder="Enter your email"
                        suffix={
                          <Img
                            src="images/img_menu.svg"
                            className="ml-[35px] mr-[1px] sm:ml-[13px] md:ml-[18px] my-[auto]"
                            alt="menu"
                          />
                        }
                        size="sm"
                        variant="FillWhiteA700"
                      ></Input>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col ml-[131px] md:ml-[67px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Product Links
                  </Text>
                  <div className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[31px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[61%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto] mt-[5px] sm:mt-[1px] md:mt-[2px]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-white_A700"
                          variant="body1"
                        >
                          Categories
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[20px] sm:mt-[7px] md:mt-[10px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          New Arrival
                        </a>
                      </li>
                      <li className="w-[auto] mt-[25px] sm:mt-[9px] md:mt-[12px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          Features
                        </a>
                      </li>
                      <li className="w-[auto] mt-[24px] mb-[3px] sm:mt-[9px] md:mt-[12px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          Collections
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col ml-[112px] md:ml-[57px] sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[8%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Company
                  </Text>
                  <div className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-white_A700"
                          variant="body1"
                        >
                          About
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[21px] sm:mt-[8px] md:mt-[10px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="w-[auto] mt-[14px] sm:mt-[5px] md:mt-[7px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          Careers
                        </a>
                      </li>
                      <li className="w-[auto] mt-[19px] sm:mt-[7px] md:mt-[9px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          Contact{" "}
                        </a>
                      </li>
                      <li className="w-[auto] mt-[18px] sm:mt-[7px] md:mt-[9px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col ml-[154px] md:ml-[79px] sm:mx-[0] pb-[4px] sm:px-[0] w-[10%] sm:w-[100%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Support
                  </Text>
                  <div className="flex flex-col justify-start sm:mt-[11px] md:mt-[15px] mt-[30px] w-[100%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-white_A700"
                          variant="body1"
                        >
                          Support Center
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[15px] sm:mt-[5px] md:mt-[7px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          FAQ
                        </a>
                      </li>
                      <li className="w-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="w-[auto] mt-[14px] sm:mt-[5px] md:mt-[7px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          Terms of service
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col ml-[130px] md:ml-[67px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Get In Touch
                  </Text>
                  <Img
                    src="images/img_sosmedia.svg"
                    className="max-w-[100%] sm:mt-[11px] md:mt-[15px] mt-[30px] sm:w-[100%] w-[79%]"
                    alt="sosmedia"
                  />
                </div>
              </div>
              <Text
                className="sm:ml-[270px] md:ml-[348px] ml-[676px] sm:mt-[33px] md:mt-[43px] mt-[85px] not-italic text-white_A700 w-[auto]"
                variant="body2"
              >
                Copyright © 2021 Elliye. All Right Reseved
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepageVOnePage;
