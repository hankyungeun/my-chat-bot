/**
 * fetch API
 * 
 * fetch(요청 주소, url, options)
 * - potions
 *      * method : 통신 방식(GET/POST/PUT/DELETE)
 *      * headers : 요청 헤더 구분
 *          + 데이터 타입
 *          + API KEy를 전달
 *      * body : POST 요청 시 전달할 데이터
 */

export const callGpt = async(inputVal) => {
    console.log('%c>> GPT요청 시작!',"background-color:red; color:white");
    const response = await fetch("https://api.openai.com/v1/chat/completions",
    {
        method:"POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${process.env.REACT_APP_GPT_API_KEY}`
        },
        body: JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{
                role:"user",
                content : inputVal
                }]
        })
    });

    const responseDate = await response.json()
    console.log('%c>> GPT 요청 완료!',"background-color:blue; color:white");
    console.log(responseDate);
    return responseDate;
}