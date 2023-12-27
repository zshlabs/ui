import Like from "../components/[like]/Like"
import OTPVerification from "../components/otp"
export default function Page() {
    return (<>
    <div>
        <h1>
            All components
        </h1>

        <div>
            <OTPVerification inputSize={4} />
            <Like />
        </div>
    </div>
    </>)
}