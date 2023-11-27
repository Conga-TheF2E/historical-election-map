export default function handler(req, res) {
  const { year } = req.query; // 從查詢參數中取得年份
  if (year === "2020") {
    res.status(200).json({
      candidates: [
        {
          name: "蔡英文",
          party: "民主進步黨",
          enName: "Tsai Ing-wen",
        },
        {
          name: "韓國瑜",
          party: "中國國民黨",
          enName: "Daniel Han",
        },
        {
          name: "宋楚瑜",
          party: "親民黨",
          enName: "James C.Y. soong",
        },
      ],
      allVotes: 15761271,
      vitePercentage: 0.75,
    });
  } else {
    res.status(400).json({ message: "Hello from Next.js!" });
  }
}
