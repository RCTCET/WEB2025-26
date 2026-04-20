
function MomentsFrame() {
    return(
        <div className="h-auto w-full my-3 overflow-hidden -translate-y-10 sm:-translate-y-20 md:-translate-y-28 bg-white dark:bg-stone-900">
                <BgImg/>
                <MomentSection/>
        </div>
    )
}

function BgImg() {
    return(
        <div className="flex justify-center w-full mt-4 sm:mt-12 lg:mt-20 mb-8 overflow-hidden px-4">
            <div className="relative w-full max-w-[1200px] flex items-center justify-center rounded-xl overflow-hidden drop-shadow-sm">
                <img 
                    src="https://res.cloudinary.com/dtc2xaeaf/image/upload/f_auto,q_auto:eco,w_1200/v1756826078/International-Day-of-Friendship-Puzzle-Colouring-Poster-black-and-white-RGB_ver_3_1_bfs140.png" 
                    alt="Moments Background Banner" 
                    className="w-full h-[150px] sm:h-[200px] lg:h-[300px] object-cover opacity-90 dark:opacity-50"
                    loading="lazy" 
                    decoding="async"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
                    <HeadText/>
                </div>
            </div>
        </div>
    )
}

function HeadText() {
    return(
        <div className="drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
            <h1 className="text-center text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-amber-700 via-orange-600 to-yellow-500 dark:from-yellow-400 dark:via-yellow-300 dark:to-white bg-clip-text text-transparent">
                Moments to Remember
            </h1>
        </div>
    )
}

const MOMENT_IMG = "f_auto,q_auto:eco,w_400,c_fill,g_auto";

function ImgSet() {
    return(
        <>
            <MomentBox image={`https://res.cloudinary.com/dtc2xaeaf/image/upload/${MOMENT_IMG}/v1756762284/IMG_0449_xpm5xd.heic`} alt="img11"/>
            <MomentBox image={`https://res.cloudinary.com/dtc2xaeaf/image/upload/${MOMENT_IMG}/v1757948233/Copy_of_IMG_1579_1_cllu8u_ydhqiq.jpg`} alt="img1"/>
            <MomentBox image={`https://res.cloudinary.com/dtc2xaeaf/image/upload/${MOMENT_IMG}/v1757948233/_DSC7394_apr72u_zi0rg3.jpg`} alt="img3"/>
            <MomentBox image={`https://res.cloudinary.com/dtc2xaeaf/image/upload/${MOMENT_IMG}/v1757948234/IMG_8196_m0x3cw_sfxyzn.jpg`} alt="img4"/>
            {/* <MomentBox image={`https://res.cloudinary.com/dtc2xaeaf/image/upload/${MOMENT_IMG}/v1756974538/IMG_1943_bswadu.heic`} alt="img6"/> */}
            <MomentBox image={`https://res.cloudinary.com/dtc2xaeaf/image/upload/${MOMENT_IMG}/v1757948232/IMG_3102_kjthpm_itv9ox.jpg`} alt="img7"/>
            <MomentBox image={`https://res.cloudinary.com/dtc2xaeaf/image/upload/${MOMENT_IMG}/v1756974888/IMG-20250617-WA0034_qeztwp.jpg`} alt="img8"/>
            <MomentBox image={`https://res.cloudinary.com/dtc2xaeaf/image/upload/${MOMENT_IMG}/v1756974860/IMG20250320115025_afbtrp.jpg`} alt="img10"/>
        </>
    )
}

function MomentSection() {
    return(
        <div className="flex justify-between items-center w-full px-2">
        <div className="z-10 lg:h-[319px] bg-gradient-to-r from-orange-100 dark:from-stone-700 rounded-l-[12px] h-[200px] w-[20px] lg:w-[35px]"></div>
            <div className="w-full overflow-hidden whitespace-nowrap box-content drop-shadow-[2px_2px_4px_rgba(0,0,0,0.40)]">
                <div className="lg:animate-slider animate-slider_mobile hover:pause-animation">
                    <ImgSet/>
                    <ImgSet/>
                    <ImgSet/>
                    <ImgSet/>
                </div>
            </div>
        <div className="z-10 lg:h-[319px] bg-gradient-to-l from-orange-100 dark:from-stone-700 rounded-r-[12px] h-[200px] w-[20px] lg:w-[35px]"></div>
        </div>
    )
}

function MomentBox({image, alt}) {
    return(
        <img src={image} alt={alt} className="h-[200px] w-[250px] inline-block ml-4 mr-4 rounded-[12px] object-cover lg:w-[286px] lg:h-[319px] border-[1px] border-black dark:border-stone-600 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.40)]" loading="lazy" decoding="async" />
    )
}

export {MomentsFrame}