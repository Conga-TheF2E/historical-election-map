export default function handler(req, res) {
  const { year } = req.query; // 從查詢參數中取得年份
  let voteDetail;
  let error;

  // 根據年份決定要使用的投票資料
  try {
    voteDetail = require(`./voteDetail/${year}.json`);
  } catch (error) {
    voteDetail = { error: "No data found for this year" };
    error = true;
  }

  res.status(error ? 404 : 200).json(voteDetail);
}

// fetch("/api/cityDetail?year=2020")
// .then((res) => res.json())
// .then((data) => console.log(data));
