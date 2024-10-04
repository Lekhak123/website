import React from 'react';

function Timeline() {
    return (
        <div className="p-4 bg-blue-50 max-w-md mx-auto rounded-lg shadow-md">
            <ul className="timeline timeline-vertical space-y-4">
                <li>
                    <div className="timeline-start timeline-box text-sm md:text-base p-3 bg-white rounded shadow text-blue-600 hover:text-blue-800 transition-colors duration-200">
                        Web Developer - UT Arlington - Nov 2023 - Present
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end timeline-box text-sm md:text-base p-3 bg-white rounded shadow text-green-600 hover:text-green-800 transition-colors duration-200">
                        Joined ACL² group - Aug 2023 - Present
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start timeline-box text-sm md:text-base p-3 bg-white rounded shadow text-purple-600 hover:text-purple-800 transition-colors duration-200">
                        Joined UT Arlington - Aug 2023 - Present
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end timeline-box text-sm md:text-base p-3 bg-white rounded shadow text-red-600 hover:text-red-800 transition-colors duration-200">
                        Junior Full Stack Developer - SilverLine - Dec 2022 - Jun 2023
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
}

export default Timeline;