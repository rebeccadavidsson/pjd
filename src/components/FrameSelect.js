export default function FrameSelect() {

    return (
        <>

            <div className={'flex justify-between gap-x-2 mt-2 mb-4'}>
                <div className="flex items-center border rounded beige w-full p-4">
                    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio"
                           className="text-blue-600 bg-gray-100 beige focus:ring-blue-500 focus:ring-2"/>
                    <label htmlFor="bordered-radio-1"
                           className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 ml-2">Zwart
                    </label>
                </div>
                <div className="flex items-center border rounded beige w-full p-4">
                    <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio"
                           className="text-blue-600 bg-gray-100 beige focus:ring-blue-500 focus:ring-2"/>
                    <label htmlFor="bordered-radio-2"
                           className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 ml-2">Wit
                    </label>
                </div>
            </div>
        </>
    );
}
