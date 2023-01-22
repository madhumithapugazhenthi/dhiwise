import React from "react";

import {
  Img,
  Text,
  Stack,
  Button,
  Line,
  Slider,
  PagerIndicator,
  Grid,
  List,
  RatingBar,
  Input,
} from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const HomepageVTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/homepagevthree");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div
        className="common-pointer bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]"
        onClick={handleNavigate4}
      >
        <header className="w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start md:p-[12px] sm:p-[15px] p-[24px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1632px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                  <Img
                    src="images/img_volume.svg"
                    className="flex-shrink-0 max-w-[100%] w-[35%]"
                    alt="volume"
                  />
                  <Text
                    className="flex-grow font-bold sm:ml-[3px] md:ml-[4px] ml-[8px] text-gray_800"
                    as="h6"
                    variant="h6"
                  >
                    Elliye{" "}
                  </Text>
                </div>
                <div className="bg-white_A700 border-2 border-gray_50 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mb-[1px] md:mb-[2px] mb-[5px] md:ml-[212px] ml-[411px] sm:mx-[0] sm:pl-[15px] md:pl-[16px] pl-[32px] sm:w-[100%] w-[36%]">
                  <Text
                    className="font-normal not-italic text-gray_500_87 w-[auto]"
                    variant="body1"
                  >
                    Search here
                  </Text>
                  <Stack className="bg-gray_800 h-[48px] sm:ml-[158px] md:ml-[204px] ml-[397px] p-[14px] sm:p-[5px] md:p-[7px] relative sm:w-[19px] md:w-[24px] w-[48px]">
                    <Img
                      src="images/img_search.svg"
                      className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] w-[18px] sm:w-[7px] md:w-[9px]"
                      alt="search"
                    />
                  </Stack>
                </div>
                <Img
                  src="images/img_car_24X80.svg"
                  className="max-w-[100%] sm:ml-[121px] md:ml-[156px] ml-[304px] w-[5%]"
                  alt="car"
                />
                <Button
                  className="cursor-pointer font-bold min-w-[7%] sm:ml-[12px] md:ml-[16px] ml-[32px] text-[14px] text-center text-white_A700 w-[max-content]"
                  size="md"
                  variant="FillGray800"
                >
                  Login
                </Button>
              </div>
              <Line className="bg-gray_50 h-[1px] mt-[19px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
              <div className="flex flex-row md:flex-wrap sm:flex-wrap sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%] common-row-list">
                <ul className="flex flex-row items-start justify-center">
                  <li className="w-[auto] mt-[2px] sm:w-[100%] sm:my-[10px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-gray_800"
                      rel="noreferrer"
                    >
                      Categories
                    </a>
                  </li>
                  <li className="w-[auto] mb-[4px] ml-[80px] sm:ml-[31px] sm:w-[100%] sm:my-[10px] md:ml-[41px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-gray_800"
                      rel="noreferrer"
                    >
                      New Arrival
                    </a>
                  </li>
                  <li className="w-[auto] mt-[1px] mb-[4px] ml-[81px] sm:ml-[32px] sm:w-[100%] sm:my-[10px] md:ml-[41px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-gray_800"
                      rel="noreferrer"
                    >
                      Features
                    </a>
                  </li>
                  <li className="w-[auto] mb-[4px] ml-[80px] sm:ml-[31px] sm:w-[100%] sm:my-[10px] md:ml-[41px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-gray_800"
                      rel="noreferrer"
                    >
                      Collections
                    </a>
                  </li>
                  <li className="w-[auto] mb-[4px] ml-[80px] sm:ml-[31px] sm:w-[100%] sm:my-[10px] md:ml-[41px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-gray_800"
                      rel="noreferrer"
                    >
                      Discount
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="overflow-auto overflow-x-auto w-[100%]">
            <Stack className="h-[750px] max-w-[2054px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Stack className="absolute h-[750px] w-[100%]">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  paddingRight={26}
                  slidesToShow={1}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00]"
                  ref={sliderRef}
                  className="w-[100%]"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group2291.png')",
                        }}
                      >
                        <div className="bg-black_900_68 flex flex-col justify-end sm:p-[15px] md:p-[16px] p-[32px] w-[100%]">
                          <div className="flex flex-col justify-start ml-[112px] md:ml-[57px] sm:mt-[34px] md:mt-[44px] mt-[86px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                            <div className="flex flex-col justify-start w-[100%]">
                              <div className="flex flex-col justify-start w-[100%]">
                                <Text
                                  className="font-medium font-poppins text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  50% Off Limited Offer
                                </Text>
                                <Text
                                  className="font-playfairdisplay leading-[100.00%] mt-[15px] sm:mt-[5px] md:mt-[7px] text-white_A700 w-[100%]"
                                  variant="body3"
                                >
                                  Summer <br />
                                  Collection
                                </Text>
                              </div>
                              <Button
                                className="flex items-center justify-center md:mt-[41px] min-w-[31%] mt-[80px] sm:mt-[31px] text-center w-[max-content]"
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
                                <div className="bg-transparent cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-white_A700">
                                  Shop Now
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 relative" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 relative"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="absolute bottom-[4%] h-[12px] left-[7%] w-[max-content]"
                  count={6}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 relative"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 relative"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[1px]"
                  unselectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[1px]"
                />
              </Stack>
              <div className="absolute bottom-[4%] flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:pl-[0] sm:pr-[15px] pr-[176px] md:pr-[90px] right-[0] shadow-bs sm:w-[100%] w-[60%]">
                <div className="bg-white_A700 flex flex-col h-[160px] sm:h-[64px] md:h-[83px] items-center sm:p-[15px] md:px-[17px] px-[34px] w-[160px] sm:w-[63px] md:w-[82px]">
                  <div className="flex flex-col items-center justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Img
                      src="images/img_vector.svg"
                      className="sm:h-[16px] md:h-[21px] h-[39px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[39px]"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal sm:mt-[11px] md:mt-[14px] mt-[28px] not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Jacket
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col h-[160px] sm:h-[64px] md:h-[83px] items-center ml-[16px] sm:ml-[6px] md:ml-[8px] sm:p-[15px] md:px-[15px] px-[30px] w-[160px] sm:w-[63px] md:w-[82px]">
                  <div className="flex flex-col items-center justify-end mt-[1px] sm:mx-[0] p-[4px] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_file.svg"
                      className="max-w-[100%] sm:mt-[1px] md:mt-[2px] mt-[5px] sm:w-[100%] w-[80%]"
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
                <div className="bg-white_A700 flex flex-col h-[160px] sm:h-[64px] md:h-[83px] items-center ml-[16px] sm:ml-[6px] md:ml-[8px] sm:p-[15px] md:px-[15px] px-[30px] w-[160px] sm:w-[63px] md:w-[82px]">
                  <div className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] p-[2px] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_vector_68X43.svg"
                      className="max-w-[100%] sm:mt-[1px] md:mt-[2px] mt-[5px] sm:w-[100%] w-[49%]"
                      alt="Vector One"
                    />
                    <Text
                      className="font-normal mb-[1px] sm:mt-[11px] md:mt-[14px] mt-[28px] not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Pants
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_800 flex flex-col h-[160px] sm:h-[64px] md:h-[83px] items-center ml-[16px] sm:ml-[6px] md:ml-[8px] sm:p-[15px] md:px-[15px] px-[30px] w-[160px] sm:w-[63px] md:w-[82px]">
                  <div className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_cut.svg"
                      className="max-w-[100%] mt-[13px] sm:mt-[5px] md:mt-[6px] sm:w-[100%] w-[73%]"
                      alt="cut"
                    />
                    <Text
                      className="font-normal mb-[4px] sm:mt-[13px] md:mt-[17px] mt-[34px] not-italic text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Shoes
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col h-[160px] sm:h-[64px] md:h-[83px] items-center ml-[16px] sm:ml-[6px] md:ml-[8px] sm:p-[15px] md:px-[15px] px-[30px] w-[160px] sm:w-[63px] md:w-[82px]">
                  <div className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] p-[3px] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_vector_68X48.svg"
                      className="max-w-[100%] sm:mt-[1px] md:mt-[2px] mt-[5px] sm:w-[100%] w-[57%]"
                      alt="Vector Two"
                    />
                    <Text
                      className="font-normal mb-[1px] sm:mt-[11px] md:mt-[14px] mt-[28px] not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Dress
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col h-[160px] sm:h-[64px] md:h-[83px] items-center ml-[16px] sm:ml-[6px] md:ml-[8px] sm:p-[15px] md:px-[16px] px-[31px] w-[160px] sm:w-[63px] md:w-[82px]">
                  <div className="flex flex-col items-center justify-start mb-[3px] mt-[11px] sm:mt-[4px] md:mt-[5px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_globe.svg"
                      className="max-w-[100%] sm:w-[100%] w-[40%]"
                      alt="globe"
                    />
                    <Text
                      className="font-normal sm:mt-[12px] md:mt-[16px] mt-[31px] not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Accesories
                    </Text>
                  </div>
                </div>
              </div>
            </Stack>
          </div>
          <Img
            src="images/img_vector_gray_500.svg"
            className="max-w-[969px] ml-[auto] mr-[auto] mt-[115px] sm:mt-[45px] md:mt-[59px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            alt="Vector Three"
          />
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1633px] ml-[auto] mr-[auto] mt-[115px] sm:mt-[45px] md:mt-[59px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col justify-start sm:p-[15px] md:p-[42px] p-[82px] w-[100%]"
                style={{ backgroundImage: "url('images/img_02.png')" }}
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
                className="bg-cover bg-no-repeat flex flex-col justify-end sm:mt-[12px] md:mt-[16px] mt-[32px] sm:p-[15px] md:p-[46px] p-[90px] w-[100%]"
                style={{ backgroundImage: "url('images/img_01.png')" }}
              >
                <Text
                  className="font-normal leading-[normal] sm:mb-[18px] md:mb-[24px] mb-[47px] sm:mt-[21px] md:mt-[28px] mt-[55px] sm:mx-[0] not-italic text-gray_800 sm:w-[100%] w-[37%]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-gray_800 text-[36px] font-poppins sm:text-[32px] md:text-[34px]">
                    Summer <br />
                  </span>
                  <span className="text-gray_800 text-[48px] font-playfairdisplay font-bold sm:text-[38px] md:text-[44px]">
                    Collection
                  </span>
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col md:ml-[16px] ml-[32px] sm:mx-[0] sm:p-[15px] md:p-[40px] p-[79px] sm:w-[100%] w-[50%]"
              style={{ backgroundImage: "url('images/img_03.png')" }}
            >
              <Text
                className="font-normal leading-[normal] sm:mb-[132px] md:mb-[171px] mb-[332px] md:mt-[115px] mt-[224px] sm:mt-[89px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[36%]"
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
          <div className="flex flex-col items-center justify-start max-w-[1632px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Text
                className="font-bold text-gray_800 w-[auto]"
                as="h5"
                variant="h5"
              >
                Featured
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                <Text
                  className="flex-grow font-medium text-gray_800"
                  variant="body1"
                >
                  View all
                </Text>
                <Img
                  src="images/img_menu.svg"
                  className="flex-shrink-0 max-w-[100%] w-[30%]"
                  alt="menu"
                />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[40px] w-[100%]">
              <div className="flex flex-col items-center sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[7px] sm:px-[0] sm:w-[100%] w-[33%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:p-[15px] md:p-[28px] p-[56px] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_placeholder_11.png')",
                  }}
                >
                  <Text
                    className="font-normal leading-[normal] sm:mb-[216px] md:mb-[279px] mb-[541px] sm:mx-[0] not-italic text-center text-gray_800 sm:w-[100%] w-[79%]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-gray_800 text-[36px] font-poppins sm:text-[32px] md:text-[34px]">
                      Discover Our <br />
                    </span>
                    <span className="text-gray_800 text-[36px] font-poppins font-bold sm:text-[32px] md:text-[34px]">
                      Featured Product
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <Grid className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
                  <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_placeholder_10.png"
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
                      src="images/img_placeholder_11.png"
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
                      src="images/img_placeholder_175X225.png"
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
                      src="images/img_placeholder_13.png"
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
                  <div className="flex flex-col items-center justify-start pb-[4px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_placeholder_12.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="RectangleThirtyNine Four"
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
                      src="images/img_rectangle39.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="RectangleThirtyNine Five"
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
                      src="images/img_placeholder_9.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="RectangleThirtyNine Six"
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
                      src="images/img_placeholder_12.png"
                      className="md:h-[127px] h-[245px] sm:h-[98px] max-w-[100%] md:w-[126px] w-[245px] sm:w-[97px]"
                      alt="RectangleThirtyNine Seven"
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
                </Grid>
              </div>
            </div>
          </div>
          <Stack className="h-[579px] mt-[100px] sm:mt-[39px] md:mt-[51px] relative w-[100%]">
            <div className="absolute bg-gray_800 flex flex-col justify-start sm:p-[15px] md:p-[26px] p-[52px] top-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start sm:mb-[108px] md:mb-[139px] mb-[271px] md:ml-[46px] ml-[91px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                <Text
                  className="font-bold text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Limited Offer
                </Text>
              </div>
            </div>
            <List
              className="absolute bottom-[0] sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 inset-x-[0] min-h-[auto] mx-[auto] sm:w-[100%] w-[85%]"
              orientation="horizontal"
            >
              <div className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[16px] p-[32px] shadow-bs1 w-[100%]">
                <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                  <Img
                    src="images/img_rectangle45.png"
                    className="sm:h-[112px] md:h-[145px] h-[279px] max-w-[100%] sm:w-[111px] md:w-[144px] w-[279px]"
                    alt="RectangleFortyFive"
                  />
                  <Button
                    className="cursor-pointer font-bold min-w-[72%] sm:mt-[12px] md:mt-[16px] mt-[32px] text-[18px] text-center text-white_A700 w-[max-content]"
                    size="lg"
                    variant="FillGray800"
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="flex flex-col items-center md:ml-[24px] ml-[48px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Limited Deals
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[31px] w-[100%]">
                      <div className="border border-gray_500 border-solid flex flex-col h-[107px] sm:h-[43px] md:h-[56px] items-center md:px-[11px] sm:px-[15px] px-[22px] w-[107px] sm:w-[42px] md:w-[55px]">
                        <div className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                          <Text
                            className="font-medium text-gray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            08
                          </Text>
                          <Text
                            className="font-normal mt-[19px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_800 w-[auto]"
                            variant="body1"
                          >
                            Hours
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray_500 border-solid flex flex-col h-[107px] sm:h-[43px] md:h-[56px] items-center sm:px-[15px] px-[18px] md:px-[9px] w-[107px] sm:w-[42px] md:w-[55px]">
                        <div className="flex flex-col items-center justify-start my-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-medium text-gray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            58
                          </Text>
                          <Text
                            className="font-normal mt-[18px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_800 w-[auto]"
                            variant="body1"
                          >
                            Minutes
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray_500 border-solid flex flex-col h-[107px] sm:h-[43px] md:h-[56px] items-center px-[14px] sm:px-[5px] md:px-[7px] w-[107px] sm:w-[42px] md:w-[55px]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:my-[3px] md:my-[4px] my-[8px] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="flex font-medium items-center text-gray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            18
                          </Text>
                          <Text
                            className="font-normal mt-[19px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_800 w-[auto]"
                            variant="body1"
                          >
                            Seconds
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-bold sm:mt-[11px] md:mt-[14px] mt-[29px] text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Black Warm Jacket{" "}
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                      <Text
                        className="font-normal line-through mb-[1px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $299
                      </Text>
                      <Text
                        className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $199
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[16px] p-[32px] shadow-bs1 w-[100%]">
                <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                  <Img
                    src="images/img_placeholder_4.png"
                    className="sm:h-[112px] md:h-[145px] h-[279px] max-w-[100%] sm:w-[111px] md:w-[144px] w-[279px]"
                    alt="RectangleFortyFive One"
                  />
                  <Button
                    className="cursor-pointer font-bold min-w-[72%] sm:mt-[12px] md:mt-[16px] mt-[32px] text-[18px] text-center text-white_A700 w-[max-content]"
                    size="lg"
                    variant="FillGray800"
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="flex flex-col items-center md:ml-[24px] ml-[48px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Limited Deals
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[31px] w-[100%]">
                      <div className="border border-gray_500 border-solid flex flex-col h-[107px] sm:h-[43px] md:h-[56px] items-center md:px-[11px] sm:px-[15px] px-[22px] w-[107px] sm:w-[42px] md:w-[55px]">
                        <div className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                          <Text
                            className="font-medium text-gray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            08
                          </Text>
                          <Text
                            className="font-normal mt-[19px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_800 w-[auto]"
                            variant="body1"
                          >
                            Hours
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray_500 border-solid flex flex-col h-[107px] sm:h-[43px] md:h-[56px] items-center sm:px-[15px] px-[18px] md:px-[9px] w-[107px] sm:w-[42px] md:w-[55px]">
                        <div className="flex flex-col items-center justify-start my-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-medium text-gray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            58
                          </Text>
                          <Text
                            className="font-normal mt-[18px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_800 w-[auto]"
                            variant="body1"
                          >
                            Minutes
                          </Text>
                        </div>
                      </div>
                      <div className="border border-gray_500 border-solid flex flex-col h-[107px] sm:h-[43px] md:h-[56px] items-center px-[14px] sm:px-[5px] md:px-[7px] w-[107px] sm:w-[42px] md:w-[55px]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:my-[3px] md:my-[4px] my-[8px] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="flex font-medium items-center text-gray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            18
                          </Text>
                          <Text
                            className="font-normal mt-[19px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_800 w-[auto]"
                            variant="body1"
                          >
                            Seconds
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[32px] text-gray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Casual Grey Shoes
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                      <Text
                        className="font-normal line-through mb-[1px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $399
                      </Text>
                      <Text
                        className="font-medium md:ml-[11px] ml-[23px] sm:ml-[9px] text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $199
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </Stack>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1634px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:pt-[2px] md:pt-[3px] pt-[7px] sm:px-[0] w-[100%]">
            <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text
                className="font-bold text-gray_800 w-[auto]"
                as="h5"
                variant="h5"
              >
                New Arrival
              </Text>
              <div className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[42px] w-[100%]">
                <Grid className="sm:gap-[13px] md:gap-[17px] gap-[34px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end p-[17px] md:p-[8px] sm:px-[15px] sm:py-[6px] w-[100%]">
                    <Img
                      src="images/img_sportj9bzxuy.png"
                      className="h-[107px] sm:h-[43px] md:h-[56px] max-w-[100%] sm:my-[11px] md:my-[14px] my-[29px] w-[107px] sm:w-[42px] md:w-[55px]"
                      alt="placeholder"
                    />
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
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
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:pl-[12px] sm:pl-[15px] pl-[24px] sm:pr-[0] md:py-[12px] py-[24px] sm:py-[9px] w-[100%]">
                    <Img
                      src="images/img_shoesisolated.png"
                      className="h-[107px] sm:h-[43px] md:h-[56px] max-w-[100%] md:my-[11px] my-[22px] sm:my-[8px] w-[107px] sm:w-[42px] md:w-[55px]"
                      alt="placeholder One"
                    />
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
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
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] w-[100%]">
                    <Img
                      src="images/img_placeholder_250X250.png"
                      className="h-[107px] sm:h-[43px] md:h-[56px] max-w-[100%] md:my-[11px] my-[22px] sm:my-[8px] w-[107px] sm:w-[42px] md:w-[55px]"
                      alt="placeholder Two"
                    />
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
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
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] w-[100%]">
                    <Img
                      src="images/img_placeholder_6.png"
                      className="h-[107px] sm:h-[43px] md:h-[56px] max-w-[100%] md:my-[11px] my-[22px] sm:my-[8px] w-[107px] sm:w-[42px] md:w-[55px]"
                      alt="placeholder Three"
                    />
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
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
                  </div>
                </Grid>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[178px] ml-[346px] sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                <Text
                  className="flex-grow font-medium text-gray_800"
                  variant="body1"
                >
                  View all
                </Text>
                <Img
                  src="images/img_menu.svg"
                  className="flex-shrink-0 max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] w-[30%]"
                  alt="menu One"
                />
              </div>
            </div>
            <div className="flex flex-col md:ml-[15px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text
                className="font-bold text-gray_800 w-[auto]"
                as="h5"
                variant="h5"
              >
                Popular This Week
              </Text>
              <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
                <Grid className="sm:gap-[13px] md:gap-[17px] gap-[34px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] w-[100%]">
                    <Img
                      src="images/img_placeholder_3.png"
                      className="h-[107px] sm:h-[43px] md:h-[56px] max-w-[100%] w-[107px] sm:w-[42px] md:w-[55px]"
                      alt="placeholder Four"
                    />
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] md:my-[10px] my-[20px] sm:my-[7px] sm:pt-[1px] md:pt-[2px] pt-[5px] sm:px-[0] sm:w-[100%] w-[40%]">
                      <div className="flex flex-col justify-start w-[100%]">
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
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                        <RatingBar
                          className=""
                          value={4}
                          starCount={5}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] w-[100%]">
                    <Img
                      src="images/img_placeholder_5.png"
                      className="h-[107px] sm:h-[43px] md:h-[56px] max-w-[100%] w-[107px] sm:w-[42px] md:w-[55px]"
                      alt="placeholder Five"
                    />
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] md:my-[10px] my-[20px] sm:my-[7px] pt-[4px] sm:px-[0] sm:w-[100%] w-[41%]">
                      <div className="flex flex-col justify-start w-[100%]">
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
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                        <RatingBar
                          className=""
                          value={4}
                          starCount={5}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] w-[100%]">
                    <Img
                      src="images/img_placeholder_177X177.png"
                      className="h-[107px] sm:h-[43px] md:h-[56px] max-w-[100%] w-[107px] sm:w-[42px] md:w-[55px]"
                      alt="placeholder Six"
                    />
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] md:my-[10px] my-[20px] sm:my-[7px] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] sm:w-[100%] w-[54%]">
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
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                        <RatingBar
                          className=""
                          value={4}
                          starCount={5}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] w-[100%]">
                    <Img
                      src="images/img_placeholder_4.png"
                      className="h-[107px] sm:h-[43px] md:h-[56px] max-w-[100%] w-[107px] sm:w-[42px] md:w-[55px]"
                      alt="placeholder Seven"
                    />
                    <div className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] md:my-[10px] my-[20px] sm:my-[7px] sm:pt-[3px] md:pt-[4px] pt-[8px] sm:px-[0] sm:w-[100%] w-[43%]">
                      <div className="flex flex-col justify-start w-[100%]">
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
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <RatingBar
                          className=""
                          value={4}
                          starCount={5}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                </Grid>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[178px] ml-[346px] sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                <Text
                  className="flex-grow font-medium text-gray_800"
                  variant="body1"
                >
                  View all
                </Text>
                <Img
                  src="images/img_menu.svg"
                  className="flex-shrink-0 max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] w-[30%]"
                  alt="menu Two"
                />
              </div>
            </div>
          </div>
          <List
            className="bg-gray_50 sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] px-[144px] sm:px-[15px] md:px-[74px] w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[384px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] md:pr-[33px] pr-[64px] sm:py-[25px] md:py-[33px] py-[64px] w-[100%]">
              <Img
                src="images/img_music.svg"
                className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                alt="music"
              />
              <div className="flex flex-col md:ml-[16px] ml-[32px] md:mr-[14px] mr-[29px] sm:mt-[1px] md:mt-[2px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
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
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[384px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] md:pr-[33px] pr-[64px] sm:py-[25px] md:py-[33px] py-[64px] w-[100%]">
              <Img
                src="images/img_computer.svg"
                className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                alt="computer"
              />
              <div className="flex flex-col md:ml-[16px] ml-[32px] md:mr-[14px] mr-[29px] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
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
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[384px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] md:pr-[33px] pr-[64px] sm:py-[25px] md:py-[33px] py-[64px] w-[100%]">
              <Img
                src="images/img_clock.svg"
                className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                alt="clock"
              />
              <div className="flex flex-col md:ml-[16px] ml-[32px] md:mr-[14px] mr-[29px] sm:mt-[2px] md:mt-[3px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
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
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[384px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] md:pr-[33px] pr-[64px] sm:py-[25px] md:py-[33px] py-[64px] w-[100%]">
              <Img
                src="images/img_music_65X65.svg"
                className="sm:h-[20px] md:h-[25px] h-[48px] max-w-[100%] sm:w-[19px] md:w-[24px] w-[48px]"
                alt="music One"
              />
              <div className="flex flex-col md:ml-[16px] ml-[32px] md:mr-[14px] mr-[29px] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
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
          <Footer1 className="bg-gray_800 w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default HomepageVTwoPage;
