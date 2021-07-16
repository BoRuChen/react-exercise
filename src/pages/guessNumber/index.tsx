import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import Reducer from "../../store/reducers"
import { bindActionCreators } from "redux"
import * as action from "../../store/action/guessNumber"
import * as Yup from "yup";
import * as guessNumberModel from './guessNumberModel'
import { useState } from "react"

type State = ReturnType<typeof Reducer>
const validate = Yup.object({
    Guess: Yup.string().matches(/(\d)/, "請輸入數字").matches(/^(?!.*(\d).*\1).*$/, "數字重複").min(4, "請輸入4個數字").max(4, "請輸入4個數字").required("必填")
})

let Ans: string = guessNumberModel.getAns()
console.log(Ans);


export const GuessNumber = () => {
    const [win, setWin] = useState(false)

    const dispatch = useDispatch()
    const { addNum, clearNum } = bindActionCreators(action, dispatch)
    const guessNumber: string[] = useSelector((state: State) => state.guess)

    const formik = useFormik({
        initialValues: {
            Guess: ''
        },
        onSubmit: values => {
            addNum(`${values.Guess}  ${guessNumberModel.getGuseeAns(Ans, values.Guess.split(""))}`)
            if (guessNumberModel.getGuseeAns(Ans, values.Guess.split("")) === '4A0B') {
                setWin(true)
                alert('遊戲獲勝')
            }
            formik.resetForm()
        },
        validationSchema: validate
    });


    return (
        <div className="flex flex-col items-center m-auto bg-blue-100 h-full min-h-screen">
            <h1 className="text-6xl font-semibold">1A2B Guess</h1>
            <div className="sm:w-5/12 w-11/12">
                <p>1. 一進到遊戲電腦隨機產生4位不重複數字</p>
                <p>2. 使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息</p>
                <p>3. 送出的答案跟正確答案比較，位置一樣則A，位置不同則B</p>
                <p>4. 會累積過去猜過的答案與結果</p>
                <p>5. 如果猜到 4A 則遊戲結束，並可另開新局</p>
            </div>
            <div className="sm:w-5/12 w-11/12 flex items-center">
                <div className="w-full">
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
                            {formik.errors.Guess ? <p className="text-red-600">{formik.errors.Guess}</p> : ''}
                        </div>
                        <div className="flex">
                            <button type="submit" className="btn bg-green-300 hover:bg-green-500 active:bg-green-700 mr-3 disabled:bg-green-200" disabled={win}>Submit</button>
                            <button type="reset" className="btn bg-red-300 hover:bg-red-500 active:bg-red-800 disabled:bg-red-200" disabled={win} onClick={e => formik.resetForm()}>reset</button>
                        </div>
                    </form>
                </div>
                <div className={`${(win ? 'flex' : 'hidden')} w-full`}>
                    <button className="btn bg-blue-500" onClick={() => {
                        clearNum()
                        Ans = guessNumberModel.getAns()
                        setWin(false)
                        console.log(Ans)
                    }}>重新開始</button>
                </div>

            </div>
            <div className="sm:w-5/12 w-11/12">
                {guessNumber.map((string, index) => {
                    return (
                        <p key={index}>{string}</p>
                    )
                })}
            </div>
        </div>
    )
}