import React from "react";

import { Img, Text, Stack, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[12px] sm:p-[15px] p-[24px] w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mb-[3px] md:mb-[4px] mb-[9px] ml-[120px] md:ml-[61px] mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[6%]">
            <Img
              src="images/img_volume.svg"
              className="flex-shrink-0 max-w-[100%] mb-[2px] w-[35%]"
              alt="volume"
            />
            <Text className="flex-grow font-bold font-poppins sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[1px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_800">
              Elliye{" "}
            </Text>
          </div>
          <div className="bg-white_A700 border-2 border-gray_50 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[212px] ml-[411px] sm:mx-[0] sm:pl-[15px] md:pl-[16px] pl-[32px] sm:w-[100%] w-[32%]">
            <Text className="font-normal font-poppins mb-[15px] mt-[14px] sm:my-[5px] md:my-[7px] not-italic text-[18px] text-gray_500_87 w-[auto]">
              Search here
            </Text>
            <Stack className="bg-gray_800 h-[48px] sm:ml-[158px] md:ml-[204px] ml-[397px] p-[14px] sm:p-[5px] md:p-[7px] relative sm:w-[19px] md:w-[24px] w-[48px]">
              <Img
                src="defaultNoData.png"
                className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] w-[18px] sm:w-[7px] md:w-[9px]"
                alt="search"
              />
            </Stack>
          </div>
          <Img
            src="images/img_car_1.svg"
            className="max-w-[100%] sm:ml-[121px] md:ml-[156px] ml-[304px] my-[12px] sm:my-[4px] md:my-[6px] w-[5%]"
            alt="car"
          />
          <Button
            className="bg-gray_800 cursor-pointer font-bold font-poppins min-w-[6%] sm:ml-[12px] md:ml-[16px] ml-[32px] sm:px-[15px] md:px-[17px] px-[34px] py-[15px] sm:py-[5px] md:py-[7px] text-[14px] text-center text-white_A700 w-[max-content]"
            size="PaddingAll16"
            variant="FillGray800"
            fontStyle="PoppinsBold18"
          >
            Login
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
