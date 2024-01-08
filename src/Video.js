import Navbar from './Navbar'


export default function Example()
{
    return(
    <div className="overflow-hidden" class="bg-cover bg-center bg-image-url" style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Navbar />
            <div className="text-container bg-white bg-opacity-75 p-6 rounded-md mt-14 mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-4">
                <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Music Video Project Sekai</h2>
            </div>
        <div class="videos-container">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/dmYeJn5ae6o" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/zsKPMYktICo" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/6FUO3P-LGyw" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
        </div>
        <div class="videos-container">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/L_vNk-FAO4k" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/h0SC8YN0lOI" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/cY-fxwWp4HM" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
        </div>
        <div class="videos-container">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/JQ4zVYslBmk" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/2qWJbhQQFB4" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
            <div class="video">
                <iframe src="https://www.youtube.com/embed//6Z41WG581BA" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
        </div>
        <div class="videos-container">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/kzU0IRCJjSE" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/6oCZJ0fHqR0" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/Kr4TRBzcxiQ" width="420" height="240" frameborder="0" allow="fullscreen"></iframe>
            </div>
        </div>
    </div>
    )
}