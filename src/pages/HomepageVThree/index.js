import React from "react";

import {
  Text,
  Img,
  Line,
  List,
  Button,
  Grid,
  Stack,
  RatingBar,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const HomepageVThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/categorieswithsidebar");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[1920px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[15px] sm:p-[15px] p-[30px] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap ml-[114px] md:ml-[58px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%] common-row-list">
                  <ul className="flex flex-row items-end">
                    <li className="w-[34%] mt-[8px] mb-[5px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:mb-[2px] md:mt-[4px] flex-row flex">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between">
                        <a
                          href={"javascript:"}
                          className="common-pointer cursor-pointer hover:font-bold font-normal mt-[2px] not-italic text-gray_800 w-[auto]"
                          variant="body1"
                          onClick={handleNavigate5}
                          rel="noreferrer"
                        >
                          Categories
                        </a>
                        <a
                          href={"javascript:"}
                          className="cursor-pointer hover:font-bold font-normal not-italic text-gray_800 w-[auto]"
                          variant="body1"
                          rel="noreferrer"
                        >
                          New Arrival
                        </a>
                        <a
                          href={"javascript:"}
                          className="cursor-pointer hover:font-bold font-normal mt-[1px] not-italic text-gray_800 w-[auto]"
                          variant="body1"
                          rel="noreferrer"
                        >
                          Features
                        </a>
                        <a
                          href={"javascript:"}
                          className="cursor-pointer hover:font-bold font-normal not-italic text-gray_800 w-[auto]"
                          variant="body1"
                          rel="noreferrer"
                        >
                          Collections
                        </a>
                      </div>
                    </li>
                    <li className="w-[7%] ml-[213px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[109px] flex-row flex">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center">
                        <Img
                          src="images/img_volume.svg"
                          className="flex-shrink-0 max-w-[100%] w-[35%]"
                          alt="volume"
                        />
                        <a
                          href={"javascript:"}
                          className="cursor-pointer flex-grow hover:font-bold font-bold sm:ml-[3px] md:ml-[4px] ml-[8px] text-gray_800"
                          as="h6"
                          variant="h6"
                          rel="noreferrer"
                        >
                          Elliye{" "}
                        </a>
                      </div>
                    </li>
                    <li className="w-[11%] ml-[592px] sm:ml-[236px] sm:w-[100%] sm:my-[10px] md:ml-[305px] md:my-[3px] max-w-[100%] my-[6px]">
                      <Img
                        src="images/img_icon.svg"
                        className="max-w-[100%]"
                        alt="icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <Line className="bg-gray_50 h-[1px] sm:w-[100%] w-[85%]" />
            </div>
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[15px] md:px-[166px] px-[322px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:px-[0] w-[100%]">
                <div className="bg-white_A700 flex flex-col h-[120px] sm:h-[48px] md:h-[62px] items-center sm:p-[15px] px-[18px] md:px-[9px] w-[120px] sm:w-[47px] md:w-[61px]">
                  <div className="flex flex-col items-center justify-start sm:mb-[1px] md:mb-[2px] mb-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <Img
                      src="images/img_cut_48X48.svg"
                      className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                      alt="cut"
                    />
                    <Text
                      className="font-normal mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_100 w-[auto]"
                      variant="body1"
                    >
                      Jacket
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col h-[120px] sm:h-[48px] md:h-[62px] items-center md:ml-[12px] ml-[24px] sm:ml-[9px] sm:p-[15px] px-[18px] md:px-[9px] w-[120px] sm:w-[47px] md:w-[61px]">
                  <div className="flex flex-col items-center justify-start sm:mb-[1px] md:mb-[2px] mb-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                    <Img
                      src="images/img_info.svg"
                      className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                      alt="info"
                    />
                    <Text
                      className="font-normal mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_100 w-[auto]"
                      variant="body1"
                    >
                      Shirt
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col h-[120px] sm:h-[48px] md:h-[62px] items-center md:ml-[12px] ml-[24px] sm:ml-[9px] sm:p-[15px] px-[18px] md:px-[9px] w-[120px] sm:w-[47px] md:w-[61px]">
                  <div className="flex flex-col items-center justify-start sm:mb-[1px] md:mb-[2px] mb-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Img
                      src="images/img_location.svg"
                      className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                      alt="location"
                    />
                    <Text
                      className="font-normal mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_100 w-[auto]"
                      variant="body1"
                    >
                      Pants
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col h-[120px] sm:h-[48px] md:h-[62px] items-center md:ml-[12px] ml-[24px] sm:ml-[9px] sm:p-[15px] px-[18px] md:px-[9px] w-[120px] sm:w-[47px] md:w-[61px]">
                  <div className="flex flex-col items-center justify-start sm:mb-[1px] md:mb-[2px] mb-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Img
                      src="images/img_user.svg"
                      className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                      alt="user"
                    />
                    <Text
                      className="font-normal mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-gray_800 w-[auto]"
                      variant="body1"
                    >
                      Shoes
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col h-[120px] sm:h-[48px] md:h-[62px] items-center md:ml-[12px] ml-[24px] sm:ml-[9px] sm:p-[15px] px-[18px] md:px-[9px] w-[120px] sm:w-[47px] md:w-[61px]">
                  <div className="flex flex-col items-center justify-start sm:mb-[1px] md:mb-[2px] mb-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Img
                      src="images/img_settings.svg"
                      className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                      alt="settings"
                    />
                    <Text
                      className="font-normal mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_100 w-[auto]"
                      variant="body1"
                    >
                      Dress
                    </Text>
                  </div>
                </div>
                <List
                  className="md:gap-[12px] gap-[24px] sm:gap-[9px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] md:ml-[12px] ml-[24px] sm:ml-[9px] sm:w-[100%] w-[44%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col h-[120px] sm:h-[48px] md:h-[62px] items-center justify-start px-[11px] sm:px-[4px] md:px-[5px] w-[100%]">
                    <div className="flex flex-col items-center justify-start mb-[12px] sm:mb-[4px] md:mb-[6px] sm:mt-[2px] md:mt-[3px] mt-[7px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_signal.svg"
                        className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                        alt="signal"
                      />
                      <Text
                        className="font-normal mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_100 w-[auto]"
                        variant="body1"
                      >
                        Accesories
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col h-[120px] sm:h-[48px] md:h-[62px] items-center justify-start sm:p-[15px] px-[18px] md:px-[9px] w-[100%]">
                    <div className="flex flex-col items-center justify-start sm:mb-[1px] md:mb-[2px] mb-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                      <Img
                        src="images/img_skirt.svg"
                        className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                        alt="Skirt"
                      />
                      <Text
                        className="font-normal mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_100 w-[auto]"
                        variant="body1"
                      >
                        Skirt
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col h-[120px] sm:h-[48px] md:h-[62px] items-center justify-start px-[10px] sm:px-[3px] md:px-[5px] w-[100%]">
                    <div className="flex flex-col items-center justify-start mb-[13px] sm:mb-[5px] md:mb-[6px] sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Img
                        src="images/img_bra.svg"
                        className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                        alt="Bra"
                      />
                      <Text
                        className="font-normal mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_100 w-[auto]"
                        variant="body1"
                      >
                        Underwear
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col h-[120px] sm:h-[48px] md:h-[62px] items-center justify-start sm:p-[15px] px-[18px] md:px-[9px] w-[100%]">
                    <div className="flex flex-col items-center justify-start sm:mb-[1px] md:mb-[2px] mb-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                      <Img
                        src="images/img_car_48X48.svg"
                        className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                        alt="car"
                      />
                      <Text
                        className="font-normal mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_100 w-[auto]"
                        variant="body1"
                      >
                        More
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_herosection.png')" }}
          >
            <div className="bg-white_A700_82 flex flex-col justify-start p-[157px] sm:p-[15px] md:p-[81px] w-[100%]">
              <div className="flex flex-col justify-start max-w-[676px] md:ml-[65px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Button
                  className="cursor-pointer font-medium font-poppins min-w-[41%] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_800 w-[max-content]"
                  size="md"
                  variant="FillWhiteA700"
                >
                  50% Off Limited Offer
                </Button>
                <Text
                  className="font-playfairdisplay sm:mt-[12px] md:mt-[16px] mt-[32px] text-gray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Summer Collection
                </Text>
                <Text
                  className="font-normal font-poppins leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[40px] not-italic text-gray_800 w-[100%]"
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </Text>
                <Button
                  className="flex items-center justify-center md:mt-[41px] min-w-[37%] mt-[80px] sm:mt-[31px] text-center w-[max-content]"
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
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1632px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] w-[100%]">
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
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Grid className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_warmpantspxl7.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="RectangleThirtyNine"
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
                      src="images/img_rectangle39_245X245.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="RectangleThirtyNine One"
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
                      src="images/img_placeholder_177X177.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="placeholder"
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
                      src="images/img_placeholder_6.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="placeholder One"
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
                </Grid>
              </div>
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <div className="bg-gray_50 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[28px] pb-[55px] w-[100%]">
                  <Img
                    src="images/img_placeholder_400X521.png"
                    className="max-w-[100%] w-[100%]"
                    alt="placeholder Two"
                  />
                  <div className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                    <Text
                      className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Brown <br />
                      Casual Sneaker
                    </Text>
                    <Text
                      className="font-medium md:mt-[12px] mt-[25px] sm:mt-[9px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      $299
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[39%] sm:mt-[22px] md:mt-[28px] mt-[56px] text-[18px] text-center text-white_A700 w-[max-content]"
                    size="lg"
                    variant="FillGray800"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Grid className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_placeholder_1.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="RectangleThirtyNine Two"
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
                      src="images/img_placeholder_631X384.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="RectangleThirtyNine Three"
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
                  <div className="flex flex-col justify-start pb-[4px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_placeholder_245X245.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="placeholder Three"
                    />
                    <div className="flex flex-col items-center justify-start md:ml-[21px] ml-[42px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
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
                  <div className="flex flex-col justify-start pb-[4px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_placeholder_250X250.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="placeholder Four"
                    />
                    <div className="flex flex-col items-center justify-start md:ml-[21px] ml-[42px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
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
                </Grid>
              </div>
            </div>
          </div>
          <Stack className="h-[426px] max-w-[1630px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
            <div className="absolute flex flex-col justify-start left-[2%] sm:mx-[0] sm:px-[0] top-[8%] sm:w-[100%] w-[14%]">
              <Text
                className="font-bold text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                New Arrival
              </Text>
              <Text
                className="font-normal leading-[32.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[23px] sm:mt-[9px] not-italic text-white_A700 w-[100%]"
                variant="body1"
              >
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </div>
            <Stack className="absolute h-[426px] w-[100%]">
              <div className="absolute bg-gray_800 sm:h-[171px] md:h-[220px] h-[426px] left-[0] w-[24%]"></div>
              <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap h-[max-content] inset-y-[0] items-center justify-between sm:mx-[0] my-[auto] sm:px-[0] right-[0] sm:w-[100%] w-[84%]">
                <List
                  className="sm:gap-[10px] md:gap-[13px] gap-[26.57px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[37px] shadow-bs2 w-[100%]">
                    <Img
                      src="images/img_businessshirt.png"
                      className="md:h-[104px] h-[200px] sm:h-[80px] max-w-[100%] md:w-[103px] w-[200px] sm:w-[79px]"
                      alt="blackbusiness"
                    />
                    <div className="flex flex-col items-center justify-start mb-[4px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
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
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[37px] shadow-bs2 w-[100%]">
                    <Img
                      src="images/img_sportj9bzxuy.png"
                      className="md:h-[104px] h-[200px] sm:h-[80px] max-w-[100%] md:w-[103px] w-[200px] sm:w-[79px]"
                      alt="pink3TZ3PBBOne"
                    />
                    <div className="flex flex-col items-center justify-start mb-[4px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
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
                </List>
                <List
                  className="sm:gap-[10px] md:gap-[13px] gap-[26.58px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col items-center justify-start mb-[1px] sm:p-[15px] md:p-[19px] p-[37px] shadow-bs2 w-[100%]">
                    <Img
                      src="images/img_placeholder_4.png"
                      className="md:h-[104px] h-[200px] sm:h-[80px] max-w-[100%] md:w-[103px] w-[200px] sm:w-[79px]"
                      alt="graytshirtis"
                    />
                    <div className="flex flex-col items-center justify-start mb-[4px] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
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
                  <div className="bg-white_A700 flex flex-col items-center justify-start mt-[1px] sm:p-[15px] md:p-[19px] p-[37px] shadow-bs2 w-[100%]">
                    <Img
                      src="images/img_placeholder_5.png"
                      className="md:h-[104px] h-[200px] sm:h-[80px] max-w-[100%] md:w-[103px] w-[200px] sm:w-[79px]"
                      alt="redcheckereds"
                    />
                    <div className="flex flex-col items-center justify-start mb-[4px] md:mt-[10px] mt-[21px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
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
            </Stack>
          </Stack>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1633px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col sm:mx-[0] sm:p-[15px] md:p-[42px] p-[82px] sm:w-[100%] w-[49%]"
              style={{ backgroundImage: "url('images/img_02_400X800.png')" }}
            >
              <Text
                className="font-normal leading-[normal] sm:mx-[0] sm:my-[23px] md:my-[30px] my-[59px] not-italic text-white_A700 sm:w-[100%] w-[36%]"
                as="h5"
                variant="h5"
              >
                <span className="text-white_A700 text-[36px] font-poppins sm:text-[32px] md:text-[34px]">
                  Casual
                  <br />
                </span>
                <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold sm:text-[38px] md:text-[44px]">
                  Collection
                </span>
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col md:ml-[16px] ml-[32px] sm:mx-[0] sm:p-[15px] md:p-[40px] p-[79px] sm:w-[100%] w-[50%]"
              style={{ backgroundImage: "url('images/img_03_400X801.png')" }}
            >
              <Text
                className="font-normal leading-[normal] sm:mx-[0] sm:my-[29px] md:my-[37px] my-[73px] not-italic text-white_A700 sm:w-[100%] w-[36%]"
                as="h5"
                variant="h5"
              >
                <span className="text-white_A700 text-[36px] font-poppins sm:text-[32px] md:text-[34px]">
                  Big Vibe <br />
                </span>
                <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold sm:text-[38px] md:text-[44px]">
                  Collection
                </span>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]">
            <Stack className="h-[362px] relative w-[100%]">
              <div className="absolute bg-gray_800 flex flex-col justify-start sm:p-[15px] md:p-[32px] p-[63px] top-[0] w-[100%]">
                <div className="flex flex-col items-center justify-start mb-[154px] sm:mb-[61px] md:mb-[79px] md:ml-[41px] ml-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Why Choose Us
                  </Text>
                </div>
              </div>
              <List
                className="absolute bottom-[0] sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-x-[0] min-h-[auto] mx-[auto] sm:w-[100%] w-[85%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[23px] p-[46px] shadow-bs3 w-[100%]">
                  <Img
                    src="images/img_music.svg"
                    className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                    alt="music"
                  />
                  <div className="flex flex-col mb-[17px] sm:mb-[6px] md:mb-[8px] md:ml-[16px] ml-[32px] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                    <Text
                      className="font-bold text-gray_800 w-[auto]"
                      variant="body1"
                    >
                      Free Delivery
                    </Text>
                    <Text
                      className="font-normal leading-[normal] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-gray_500 w-[100%]"
                      variant="body1"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[23px] p-[46px] shadow-bs3 w-[100%]">
                  <Img
                    src="images/img_computer.svg"
                    className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                    alt="computer"
                  />
                  <div className="flex flex-col mb-[17px] sm:mb-[6px] md:mb-[8px] md:ml-[16px] ml-[32px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                    <Text
                      className="font-bold text-gray_800 w-[auto]"
                      variant="body1"
                    >
                      Payment Method
                    </Text>
                    <Text
                      className="font-normal leading-[normal] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-gray_500 w-[100%]"
                      variant="body1"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[23px] p-[46px] shadow-bs3 w-[100%]">
                  <Img
                    src="images/img_clock.svg"
                    className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                    alt="clock"
                  />
                  <div className="flex flex-col mb-[17px] sm:mb-[6px] md:mb-[8px] md:ml-[16px] ml-[32px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                    <Text
                      className="font-bold text-gray_800 w-[auto]"
                      variant="body1"
                    >
                      Warranty
                    </Text>
                    <Text
                      className="font-normal leading-[normal] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-gray_500 w-[100%]"
                      variant="body1"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[23px] p-[46px] shadow-bs3 w-[100%]">
                  <Img
                    src="images/img_music_65X65.svg"
                    className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                    alt="music One"
                  />
                  <div className="flex flex-col mb-[17px] sm:mb-[6px] md:mb-[8px] md:ml-[16px] ml-[32px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                    <Text
                      className="font-bold text-gray_800 w-[auto]"
                      variant="body1"
                    >
                      Customer Support{" "}
                    </Text>
                    <Text
                      className="font-normal leading-[normal] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-gray_500 w-[100%]"
                      variant="body1"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
              </List>
            </Stack>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1630px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] pt-[11px] sm:pt-[4px] md:pt-[5px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
              <Text
                className="font-bold text-gray_800 w-[auto]"
                as="h5"
                variant="h5"
              >
                Popular this Week
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
            <List
              className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-6 min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_placeholder_6.png"
                  className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                  alt="placeholder Five"
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_500 w-[auto]"
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
                  alt="placeholder Six"
                />
                <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <Text
                    className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Black Formal
                    <br />
                    Highheels
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_500 w-[auto]"
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
                <div className="flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                  <Text
                    className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Brown <br />
                    Casual Shoes
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col justify-start pb-[4px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_travel8v7cnke.png"
                  className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                  alt="placeholder Eight"
                />
                <div className="flex flex-col items-center justify-start md:ml-[25px] ml-[50px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-medium leading-[normal] text-center text-gray_800 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Gray <br />
                    Longpants
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_500 w-[auto]"
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
                  alt="placeholder Nine"
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_placeholder_3.png"
                  className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                  alt="placeholder Ten"
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                    <RatingBar
                      className=""
                      value={4}
                      starCount={5}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={16}
                    ></RatingBar>
                  </div>
                  <Text
                    className="font-medium md:mt-[10px] mt-[20px] sm:mt-[7px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    $299
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Img
            src="images/img_brand.svg"
            className="max-w-[969px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            alt="brand"
          />
          <footer className="bg-gray_800 mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1632px] sm:mb-[12px] md:mb-[16px] mb-[32px] ml-[auto] mr-[auto] sm:mt-[25px] md:mt-[33px] mt-[64px] sm:mx-[0] mx-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                  <div className="flex flex-col justify-start sm:mt-[1px] md:mt-[2px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-bold text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Contacts
                      </Text>
                      <div className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[19px] mt-[38px] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center pr-[4px] py-[4px] w-[100%]">
                          <Img
                            src="images/img_call.svg"
                            className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                            alt="call"
                          />
                          <Text
                            className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] not-italic text-white_A700"
                            variant="body1"
                          >
                            +1234567890
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[16px] sm:mt-[6px] md:mt-[8px] pr-[4px] pt-[4px] w-[100%]">
                          <Img
                            src="images/img_mail.svg"
                            className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] mb-[4px] md:w-[12px] w-[24px] sm:w-[9px]"
                            alt="mail"
                          />
                          <Text
                            className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[4px] not-italic text-white_A700"
                            variant="body1"
                          >
                            elliye@support.com
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start sm:mt-[19px] md:mt-[24px] mt-[48px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Text
                        className="font-bold text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Social Media
                      </Text>
                      <Img
                        src="images/img_sosmedia.svg"
                        className="max-w-[100%] sm:mt-[15px] md:mt-[20px] mt-[39px] sm:w-[100%] w-[77%]"
                        alt="sosmedia"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Product Links
                    </Text>
                    <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[23px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer font-normal not-italic text-gray_500"
                            variant="body1"
                          >
                            Categories
                          </Text>
                        </li>
                        <li className="w-[auto] mt-[20px] sm:mt-[7px] md:mt-[10px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            New Arrival
                          </a>
                        </li>
                        <li className="w-[auto] mt-[25px] sm:mt-[9px] md:mt-[12px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            Features
                          </a>
                        </li>
                        <li className="w-[auto] mt-[24px] sm:mt-[9px] md:mt-[12px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            Collections
                          </a>
                        </li>
                        <li className="w-[auto] mt-[25px] sm:mt-[9px] md:mt-[12px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            Discount
                          </a>
                        </li>
                        <li className="w-[auto] mt-[27px] sm:mt-[10px] md:mt-[13px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            Special Offer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end md:ml-[129px] ml-[251px] sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[16%]">
                    <Text
                      className="font-bold mt-[3px] text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Company
                    </Text>
                    <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer font-normal not-italic text-gray_500"
                            variant="body1"
                          >
                            About
                          </Text>
                        </li>
                        <li className="w-[auto] mt-[27px] sm:mt-[10px] md:mt-[13px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            Blog
                          </a>
                        </li>
                        <li className="w-[auto] mt-[20px] sm:mt-[7px] md:mt-[10px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            Careers
                          </a>
                        </li>
                        <li className="w-[auto] mt-[24px] sm:mt-[9px] md:mt-[12px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            Services
                          </a>
                        </li>
                        <li className="w-[auto] mt-[27px] sm:mt-[10px] md:mt-[13px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li className="w-[auto] mt-[20px] sm:mt-[7px] md:mt-[10px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[18px] text-gray_500"
                            rel="noreferrer"
                          >
                            Terms of service
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start ml-[170px] md:ml-[87px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%] common-column-list">
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
                          className="cursor-pointer font-normal leading-[normal] not-italic text-[18px] text-gray_500"
                          rel="noreferrer"
                        >
                          Drop your email below to get update, promotions,
                          coupons, and more!
                        </a>
                      </li>
                      <li className="w-[100%] mt-[35px] sm:mt-[13px] md:mt-[18px]">
                        <Input
                          className="cursor-pointer font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_100_87 text-bluegray_100_87 tracking-ls036 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          type="email"
                          name="form"
                          placeholder="Enter your email"
                          suffix={
                            <div className="w-[60px] h-[60px] sm:h-[24px] sm:w-[23px] sm:mx-[5px] md:h-[31px] md:w-[30px] md:mx-[7px] bg-white_A700 mx-[14px] flex justify-center items-center">
                              <Img
                                src="images/img_menu.svg"
                                className="my-[auto]"
                                alt="menu"
                              />
                            </div>
                          }
                          size="sm"
                          variant="OutlineWhiteA700"
                        ></Input>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Text
                className="sm:mt-[27px] md:mt-[35px] mt-[68px] not-italic text-bluegray_100 w-[auto]"
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

export default HomepageVThreePage;
