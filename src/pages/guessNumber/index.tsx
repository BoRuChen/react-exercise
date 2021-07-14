import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import Reducer from "../../store/reducers"
import { bindActionCreators } from "redux"
import * as action from "../../store/action/guessNumber"
import * as Yup from "yup";

type State = ReturnType<typeof Reducer>
const validate = Yup.object({
    Guess: Yup.string().matches(/(\d)/, "請輸入數字").matches(/^(?!.*(\d).*\1).*$/, "數字重複").min(4, "請輸入4個數字").max(4, "請輸入4個數字").required("必填")
})
export const GuessNumber = () => {
    const dispatch = useDispatch()
    const { addNum, clearNum } = bindActionCreators(action, dispatch)
    const guessNumber = useSelector((state: State) => state.guess)

    const formik = useFormik({
        initialValues: {
            Guess: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: validate
    });


    return (
        <div className="flex flex-col items-center m-auto bg-indigo-100 h-screen">
            <h1 className="text-6xl font-semibold">1A2B Guess</h1>
            <div className="w-5/12">
                <p>1. 一進到遊戲電腦隨機產生4位不重複數字</p>
                <p>2. 使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息</p>
                <p>3. 送出的答案跟正確答案比較，位置一樣則A，位置不同則B</p>
                <p>4. 會累積過去猜過的答案與結果</p>
                <p>5. 如果猜到 4A 則遊戲結束，並可另開新局</p>
            </div>
            <div className="w-5/12">
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-start">
                    <label htmlFor="Guess">Guess</label>
                    <div className="flex">
                        <input
                            id="Guess"
                            name="Guess"
                            type="text"
                            maxLength={4}
                            onChange={formik.handleChange}
                            value={formik.values.Guess}
                        />
                        {formik.errors.Guess}
                    </div>
                    <button type="submit">Submit</button>
                    <button type="reset"  onClick={ e => formik.resetForm()}>reset</button>
                </form>
            </div>
        </div>
    )
}