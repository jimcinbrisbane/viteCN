

import { useState } from 'react'


function Footer()
{
    return (
        <div id="footer">
            <section class = "global-padding">
            <div class="contentwrapper">
                <div id="congratulations">
                    Congratulations!
                    <div id="copyright">&copy;
                        <script>document.write((new Date()).getFullYear().toString())</script> Code Network. Test 12
                    </div>
                </div>
            </div>
            </section>   
        </div>
    )
}

export default Footer
