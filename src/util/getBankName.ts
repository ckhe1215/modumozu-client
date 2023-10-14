export const getBankName = (id: number) => {
  const bankIdMap = new Map([
    [1, "KB증권"],
    [2, "키움증권"],
    [3, "유안타증권"],
    [4, "대신증권"],
    [5, "미래에셋증권"],
    [6, "삼성증권"],
    [7, "한국투자증권"],
    [8, "신한투자증권"],
    [9, "NH투자증권"],
    [10, "SK증권"],
    [11, "한화투자증권"],
    [12, "하나증권"],
    [13, "유진투자증권"],
    [14, "IBK투자증권"],
    [15, "교보증권"],
    [16, "하이투자증권"],
    [17, "다올투자증권"],
    [18, "현대차증권"],
    [19, "신영증권"],
    [20, "DB금융투자증권"],
    [21, "부국증권"],
    [22, "케이프투자증권"],
    [23, "상상인증권"],
  ]);

  return bankIdMap.get(id);
};
