import React from "react";

import Header1 from "components/Header1";
import { Img, Text, Button, Line, Input } from "components";
import Footer1 from "components/Footer1";

const CompletedPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Header1 className="w-[100%]" />
        <div className="flex flex-col justify-start sm:mt-[13px] md:mt-[18px] mt-[35px] w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[360px] md:ml-[74px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-medium mt-[1px] text-gray_500 w-[auto]"
              variant="body1"
            >
              Home
            </Text>
            <Text
              className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[1px] text-bluegray_100 w-[auto]"
              variant="body1"
            >
              {">"}
            </Text>
            <Text
              className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[1px] text-gray_500 w-[auto]"
              variant="body1"
            >
              Shopping Cart
            </Text>
            <Text
              className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[1px] text-bluegray_100 w-[auto]"
              variant="body1"
            >
              {">"}
            </Text>
            <Text
              className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] text-gray_800 w-[auto]"
              variant="body1"
            >
              Checkout
            </Text>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1604px] md:ml-[74px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[39px] md:mt-[51px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
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
            <Line className="bg-gray_800 h-[2px] md:ml-[10px] ml-[21px] sm:ml-[8px] sm:my-[10px] md:my-[13px] my-[27px] w-[24%]" />
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[29px] ml-[57px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
              <Text
                className="border-2 border-gray_800 border-solid flex font-medium items-center md:px-[10px] sm:px-[15px] px-[21px] rounded-radius50 text-gray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                2
              </Text>
              <Text
                className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-gray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Checkout
              </Text>
            </div>
            <Line className="bg-gray_800 h-[2px] sm:ml-[22px] md:ml-[28px] ml-[56px] sm:my-[10px] md:my-[13px] my-[27px] w-[24%]" />
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
              <Text
                className="border-2 border-gray_800 border-solid flex font-medium items-center md:px-[10px] sm:px-[15px] px-[20px] rounded-radius50 text-gray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                3
              </Text>
              <Text
                className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-gray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[692px] md:ml-[316px] ml-[auto] mr-[auto] md:mt-[114px] mt-[222px] sm:mt-[88px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text className="text-gray_800 w-[auto]" as="h3" variant="h3">
              Checkout Complete!
            </Text>
            <Text
              className="font-normal leading-[32.00px] md:leading-[normal] sm:leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] not-italic text-center text-gray_800 sm:w-[100%] w-[98%]"
              variant="body1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[36%] sm:mt-[25px] md:mt-[33px] mt-[64px] text-[18px] text-center text-white_A700 w-[max-content]"
              size="lg"
              variant="FillGray800"
            >
              Go Shopping Again
            </Button>
          </div>
          <Footer1 className="bg-gray_800 md:mt-[103px] mt-[200px] sm:mt-[79px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CompletedPage;
