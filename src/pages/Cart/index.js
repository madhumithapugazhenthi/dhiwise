import React from "react";

import Header1 from "components/Header1";
import { Img, Text, Button, Line, List, Stack, Input } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/checkout");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Header1 className="w-[100%]" />
        <div className="flex flex-col justify-start sm:mt-[13px] md:mt-[18px] mt-[35px] w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[229px] md:ml-[74px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
              Shopping Cart
            </Text>
          </div>
          <Text
            className="font-bold sm:ml-[329px] md:ml-[426px] ml-[826px] sm:mt-[20px] md:mt-[26px] mt-[52px] text-gray_800 w-[auto]"
            as="h5"
            variant="h5"
          >
            Shopping Cart
          </Text>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1604px] md:ml-[74px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                <Text
                  className="border-2 border-gray_800 border-solid flex font-medium items-center md:px-[11px] sm:px-[15px] px-[23px] rounded-radius50 text-gray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  1
                </Text>
                <Text
                  className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-gray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Shopping Cart
                </Text>
              </div>
              <Line className="bg-gray_800 h-[2px] sm:my-[10px] md:my-[13px] my-[27px] sm:w-[100%] w-[59%]" />
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[29px] ml-[57px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                <Text
                  className="border-2 border-bluegray_100 border-solid flex font-medium items-center md:px-[10px] sm:px-[15px] px-[21px] rounded-radius50 text-bluegray_100 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  2
                </Text>
                <Text
                  className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-bluegray_100 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Checkout
                </Text>
              </div>
              <Line className="bg-bluegray_100 h-[2px] sm:ml-[22px] md:ml-[28px] ml-[56px] sm:my-[10px] md:my-[13px] my-[27px] sm:w-[100%] w-[61%]" />
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
              <Text
                className="border-2 border-bluegray_100 border-solid flex font-medium items-center md:px-[10px] sm:px-[15px] px-[20px] rounded-radius50 text-bluegray_100 w-[auto]"
                as="h6"
                variant="h6"
              >
                3
              </Text>
              <Text
                className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-bluegray_100 w-[auto]"
                as="h6"
                variant="h6"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start max-w-[1632px] md:ml-[74px] ml-[auto] mr-[auto] sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col justify-start pt-[4px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                    <Text
                      className="font-medium text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Product
                    </Text>
                    <Text
                      className="font-medium sm:ml-[235px] md:ml-[304px] ml-[590px] sm:mt-[1px] md:mt-[2px] mt-[5px] text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Quantity
                    </Text>
                    <Text
                      className="font-medium md:ml-[119px] ml-[231px] sm:ml-[92px] mt-[3px] text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-medium md:ml-[119px] ml-[232px] sm:ml-[92px] mt-[4px] text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Total
                    </Text>
                  </div>
                  <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
                </div>
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[31px] grid min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[31px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Stack className="border border-bluegray_100 border-solid h-[200px] p-[10px] sm:p-[3px] md:p-[5px] relative md:w-[103px] w-[200px] sm:w-[79px]">
                        <Img
                          src="images/img_placeholder_2.png"
                          className="absolute h-[180px] inset-[0] justify-center m-[auto] max-w-[100%] w-[180px] sm:w-[71px] md:w-[92px]"
                          alt="placeholder"
                        />
                      </Stack>
                      <Text
                        className="font-medium sm:ml-[26px] md:ml-[34px] ml-[66px] text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Gray T-shirt
                      </Text>
                      <Stack className="h-[48px] md:ml-[129px] ml-[250px] sm:ml-[99px] relative w-[11%]">
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
                      <Text
                        className="font-medium ml-[139px] sm:ml-[55px] md:ml-[71px] text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $100.99
                      </Text>
                      <Text
                        className="font-medium ml-[186px] sm:ml-[74px] md:ml-[96px] text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $100.99
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="sm:h-[14px] md:h-[18px] h-[33px] max-w-[100%] sm:ml-[102px] md:ml-[132px] ml-[257px] sm:w-[13px] md:w-[17px] w-[33px]"
                        alt="close"
                      />
                    </div>
                    <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Stack className="border border-bluegray_100 border-solid h-[200px] p-[10px] sm:p-[3px] md:p-[5px] relative md:w-[103px] w-[200px] sm:w-[79px]">
                        <Img
                          src="images/img_warmpantspxl7.png"
                          className="absolute h-[180px] inset-[0] justify-center m-[auto] max-w-[100%] w-[180px] sm:w-[71px] md:w-[92px]"
                          alt="placeholder One"
                        />
                      </Stack>
                      <Text
                        className="font-medium sm:ml-[26px] md:ml-[34px] ml-[66px] text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Red Flannel
                      </Text>
                      <Stack className="h-[48px] sm:ml-[101px] md:ml-[131px] ml-[255px] relative w-[11%]">
                        <Button
                          className="absolute flex sm:h-[20px] md:h-[25px] h-[48px] items-center justify-center right-[0] sm:w-[19px] md:w-[24px] w-[48px]"
                          size="lgIcn"
                          variant="icbFillGray800"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="h-[16px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                            alt="grid One"
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
                      <Text
                        className="font-medium ml-[139px] sm:ml-[55px] md:ml-[71px] text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $100.99
                      </Text>
                      <Text
                        className="font-medium ml-[186px] sm:ml-[74px] md:ml-[96px] text-gray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $100.99
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="sm:h-[14px] md:h-[18px] h-[33px] max-w-[100%] sm:ml-[102px] md:ml-[132px] ml-[257px] sm:w-[13px] md:w-[17px] w-[33px]"
                        alt="close One"
                      />
                    </div>
                    <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
                  </div>
                </List>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[32px] sm:pb-[3px] md:pb-[4px] pb-[8px] w-[100%]">
                <div className="border border-bluegray_100 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:pl-[15px] pl-[16px] md:pl-[8px] sm:pr-[0] sm:w-[100%] w-[29%]">
                  <Text
                    className="font-normal not-italic text-gray_500_87 tracking-ls036 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Enter coupon code
                  </Text>
                  <Button
                    className="cursor-pointer font-normal min-w-[31%] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
                    size="lg"
                    variant="FillGray800"
                  >
                    Apply Code
                  </Button>
                </div>
                <div className="flex flex-col items-end justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                  <Text
                    className="font-medium text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Total
                  </Text>
                  <Text
                    className="font-bold sm:mt-[11px] md:mt-[14px] mt-[29px] text-gray_800 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    $202.00
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
              <Button
                className="cursor-pointer font-medium min-w-[51%] text-[18px] text-center text-gray_800 w-[max-content]"
                size="sm"
                variant="OutlineGray800"
              >
                Continue Shopping
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[42%] sm:ml-[12px] md:ml-[16px] ml-[32px] text-[18px] text-center text-white_A700 w-[max-content]"
                onClick={handleNavigate6}
                size="md"
                variant="FillGray800"
              >
                Checkout
              </Button>
            </div>
          </div>
          <Footer className="bg-gray_800 mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CartPage;
