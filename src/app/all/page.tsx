import OTPVerification from "../components/otp"
export default function Page() {
    return (<>
    <div>
        <h1>
            All components
        </h1>

        <div>
            <OTPVerification inputSize={4} />
        </div>
    </div>
    </>)
}