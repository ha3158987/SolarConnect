//양식에 맞는 숫자가 들어오는 지 확인하는 역할
export const numValidation = inputValue => {
    const Regex = /^\d{1,4},\d{1,4},\d{1,4},\d{1,4},\d{1,4}$/;

    if(!Regex.test(inputValue)) {
        return {
            result: false,
            message: '입력 양식을 확인해주세요!'
        };
    }

    return {
        result: true,
        message: '',
    };
};