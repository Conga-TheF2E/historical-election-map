function Modal(props) {
  const {
    screenLevel,
    enteredSecondPage,
    setIsMapLoading,
    cityDetail,
    setCityCode,
    cityCode,
    mapMode,
    setMapMode,
    selectedCity,
    setSelectedCity,
  } = props;
  return (
    <div
      className="absolute left-1/2 top-1/2 flex -translate-x-[594px] -translate-y-1/2 flex-col items-center bg-gray100 px-7 py-[30px] font-GenSekiGothic-R text-gray900"
      style={{ display: cityCode != "" ? "block" : "none" }}
    >
      <div
        className="absolute top-[-46px] bg-gray100 p-[3px]"
        onClick={() => resetMap()}
      >
        <img src="/img/arrow-left.svg" alt="" />
      </div>
      <div className="font-GenSekiGothic-B text-[28px] font-bold leading-none">
        {selectedCity.name}
      </div>
      <div className=" mt-[5px] text-sm">{selectedCity.voteDetail.total}票</div>
      <div className="mt-[18px] flex w-full items-center justify-between">
        <div className="bg-green300 p-1 text-base leading-none">蔡</div>
        <div className=" font-GenSekiGothic-M font-medium">
          {selectedCity.voteDetail.民主進步黨.percentage}{" "}
          <span className="text-green300">
            ({selectedCity.voteDetail.民主進步黨.compare})
          </span>
        </div>
      </div>
      <div className="mt-[18px] flex w-full items-center justify-between">
        <div className="bg-blue300 p-1 text-base leading-none">韓</div>
        <div className=" font-GenSekiGothic-M font-medium">
          {selectedCity.voteDetail.中國國民黨.percentage}{" "}
          <span className="text-blue300">
            ({selectedCity.voteDetail.中國國民黨.compare})
          </span>
        </div>
      </div>
      <div className="mt-[18px] flex w-full items-center justify-between">
        <div className="bg-orange500 p-1 text-base leading-none">宋</div>
        <div className=" font-GenSekiGothic-M font-medium">
          {selectedCity.voteDetail.親民黨.percentage}{" "}
          <span className="text-orange500">
            ({selectedCity.voteDetail.親民黨.compare})
          </span>
        </div>
      </div>
      <div className="mt-[30px] w-full font-GenSekiGothic-M font-medium">
        過往戰況
      </div>
      <div className="mt-[13px] flex justify-between gap-5">
        <div className="flex flex-col items-center bg-gray900 px-[18px] pb-1.5 pt-1">
          <div className="text-xs text-gray100">2018九合一大選</div>
          <div className="mt-1 bg-blue300 p-0.5 text-base leading-none">國</div>
        </div>
        <div className="flex flex-col items-center bg-gray900 px-[24px] pb-1.5 pt-1">
          <div className="text-xs text-gray100">2016總統大選</div>
          <div className="mt-1 bg-green300 p-0.5 text-base leading-none">
            民
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
