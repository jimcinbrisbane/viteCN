

import { useState } from 'react'


function Footer()
{

    return (
        <div id="footer">
            <div class="contentwrapper">
                <div id="congratulations">
                    Congratulations!
                    <div id="copyright">&copy;
                        <script>document.write((new Date()).getFullYear().toString())</script> Code Network. Licensed
                        under GPL v2.0
                    </div>
                </div>
                <div id="social">

                </div>
            </div>
        </div>
    )
}

export default Footer
