import { Link } from "@mui/icons-material";
import { FileOpen } from "@mui/icons-material";

export default function SGM() {
  return (
    <div class="edges" style={{ display: "grid" }}>
      <div style={{ maxWidth: "90ch", placeSelf: "center" }}>
        <h1>January 2024 Special General Meeting</h1>
        <p>Dear Code Network members,</p>
        <p>In light of a significant transition within the execute team for 2024, we are required, as per section 15.2 of the Constitution, to convene a General Meeting (GM) to elect a replacement for the vacant role.</p>
        <p>We are presently coordinating with the Guild to finalise the specifics of this GM. Your attendance and support are invaluable in this process, and we welcome your participation.</p>
        <p>We extend an invitation to all members interested in assuming the responsibilities of <strong>Treasurer</strong> to attend and formally express their interest. Please use this <a className="link" href="#">expression of interest form</a> to register your interest as soon as possible.</p>
        <p>Additionally, as a result of any movement of current executives roles, there exists an opportunity for members to step into any vacated positions during the meeting.</p>
        <p>Thank you for your ongoing support.</p>
        <div style={{ display: "flex", flexDirection: "row", flexWrap:'wrap', gap: '1rem' }}>
            <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width:"fit-content" }}>
                <p><a style={{ display: 'flex', alignItems:'center', gap: '0.6rem' }} className="link" href=""><Link />Expression of Interest Form</a></p>
            </div>
            <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width:"fit-content" }}>
            <p><a style={{ display: 'flex', alignItems:'center', gap: '0.6rem' }} className="link" href=""><FileOpen />Information about roles</a></p>
            </div>
        </div>
        <div style={{ background: "#eee", padding: "1rem 2rem", borderRadius: "8px", marginTop: "2rem" }}>
          <p>The date, time and location for this event are being organised, please check back Monday for additional information</p>
        </div>
      </div>
    </div>
  );
}
