import React from "react";

import Header from "components/Header";
import { Img, Text, Stack, Button, Line, List, Input } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/cart");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1632px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Img
                src="images/img_shoesisolated.png"
                className="max-w-[100%] w-[100%]"
                alt="placeholder"
              />
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                <Img
                  src="images/img_placeholder_245X245.png"
                  className="max-w-[100%] w-[29%]"
                  alt="placeholder One"
                />
                <Img
                  src="images/img_placeholder_15.png"
                  className="max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[32px] w-[29%]"
                  alt="placeholder Two"
                />
                <Img
                  src="images/img_placeholder_5.png"
                  className="max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[32px] w-[29%]"
                  alt="placeholder Three"
                />
              </div>
            </div>
            <div className="flex flex-col md:ml-[16px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <div className="flex flex-col justify-start pt-[4px] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                  <Text
                    className="font-medium text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Featured
                  </Text>
                  <Text
                    className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[1px] text-bluegray_100 w-[auto]"
                    variant="body1"
                  >
                    {">"}
                  </Text>
                  <Text
                    className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[2px] text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Purple Warm Jacket
                  </Text>
                </div>
                <div className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
                  <Text
                    className="leading-[normal] sm:mx-[0] text-gray_800 sm:w-[100%] w-[49%]"
                    as="h4"
                    variant="h4"
                  >
                    Purple Warm <br />
                    Zip Jacket
                  </Text>
                  <Text
                    className="font-normal sm:mt-[16px] md:mt-[21px] mt-[41px] not-italic text-gray_500 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    $299
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] sm:mt-[15px] md:mt-[20px] mt-[40px] w-[100%]" />
                  <Text
                    className="font-normal leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[31px] not-italic text-gray_500 w-[100%]"
                    variant="body1"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[22px] md:mt-[28px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                <Text
                  className="font-medium text-gray_800 w-[auto]"
                  variant="body1"
                >
                  Quantity
                </Text>
                <Stack className="h-[48px] md:ml-[12px] ml-[24px] sm:ml-[9px] relative sm:w-[100%] w-[63%]">
                  <Button
                    className="absolute flex sm:h-[20px] md:h-[25px] h-[48px] items-center justify-center right-[0] sm:w-[19px] md:w-[24px] w-[48px]"
                    size="lgIcn"
                    variant="icbFillGray800"
                  >
                    <Img
                      src="images/img_grid.svg"
                      className="h-[16px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                      alt="grid"
                    />
                  </Button>
                  <div className="absolute bg-gray_50 flex flex-col sm:h-[20px] md:h-[25px] h-[48px] items-center justify-start left-[0] sm:p-[15px] px-[19px] md:px-[9px] sm:w-[19px] md:w-[24px] w-[48px]">
                    <div className="bg-gray_500 sm:h-[1px] h-[2px] my-[3px] sm:w-[100%] w-[90%]"></div>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-medium text-[18px] text-center text-gray_800 w-[100%]"
                    size="md"
                    variant="OutlineBluegray100"
                  >
                    1
                  </Button>
                </Stack>
              </div>
              <Button
                className="flex items-center justify-center md:mt-[28px] min-w-[31%] mt-[56px] sm:mt-[22px] text-center w-[max-content]"
                onClick={handleNavigate9}
                rightIcon={
                  <Img
                    src="images/img_cart.svg"
                    className="ml-[16px] sm:ml-[6px] md:ml-[8px] text-center"
                    alt="cart"
                  />
                }
                size="xl"
                variant="FillGray800"
              >
                <div className="common-pointer bg-transparent cursor-pointer font-bold text-[18px] text-white_A700">
                  Add to Cart
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1632px] ml-[auto] mr-[auto] mt-[183px] sm:mt-[73px] md:mt-[94px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between py-[3px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                <Text
                  className="font-bold text-gray_800 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Similiar Product
                </Text>
                <Text
                  className="font-medium text-gray_500 w-[auto]"
                  variant="body1"
                >
                  View all
                </Text>
              </div>
              <Img
                src="images/img_button_bluegray_100.svg"
                className="max-w-[100%] w-[7%]"
                alt="button"
              />
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
              <List
                className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[50%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                  <Img
                    src="images/img_placeholder_1.png"
                    className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                    alt="placeholder Four"
                  />
                  <div className="flex flex-col items-center justify-start sm:mx-[0] my-[19px] sm:my-[7px] md:my-[9px] sm:px-[0] sm:w-[100%] w-[74%]">
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
                <div className="flex flex-col items-center justify-center md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                  <Img
                    src="images/img_placeholder_16.png"
                    className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                    alt="placeholder Five"
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
              </List>
              <List
                className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[50%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-center mb-[1px] md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] w-[100%]">
                  <Img
                    src="images/img_travel8v7cnke.png"
                    className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                    alt="placeholder Six"
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
                    src="images/img_placeholder_2.png"
                    className="sm:h-[100px] md:h-[130px] h-[250px] max-w-[100%] mt-[14px] sm:mt-[5px] md:mt-[7px] md:w-[129px] w-[250px] sm:w-[99px]"
                    alt="placeholder Seven"
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
          </div>
          <Footer className="bg-gray_800 mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
