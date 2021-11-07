import "./App.css";

export default function App() {
  return (
    <div className="Container">
      <List />
    </div>
  );
}

// Price Data
function List() {
  let box1 = {
    plan: "FREE",
    amount: "$0",
    benefits: [
      "Single User",
      "5GB Storage",
      "Unlimited Public Projects",
      "Community Access",
    ],
    unavailable: [
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
  };
  let box2 = {
    plan: "PLUS",
    amount: "$9",
    benefits: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
    ],
    unavailable: ["Monthly Status Reports"],
  };
  let box3 = {
    plan: "PRO",
    amount: "$49",
    benefits: [
      "Unlimited Users",
      "150GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Unlimited Free Subdomain",
      "Monthly Status Reports",
    ],
    unavailable: [],
  };
  let boxes = [box1, box2, box3];
  return (
    <div className="Boxes">
      {boxes.map((x) => (
        <Box data={x} />
      ))}
    </div>
  );
}

function Box(props) {
  // Destructuring data from Box
  let { plan, amount, benefits, unavailable } = props.data;
  return (
    <div className="indBox">
      {/* Plan Heading */}
      <p className="planname">{plan}</p>
      {/* Price of the Plan */}
      <p className="planamount">
        <strong className="amount">{amount}</strong>
        <sub>/month</sub>
      </p>

      <hr />
      {/* Looping Benefits Array*/}
      <ol>
        {benefits.map((x) => {
          // Condition to display the data in bold
          // Box2 & Box3
          if (x === "5 Users" || x === "Unlimited Users") {
            return (
              <li className="benefits">
                {" "}
                <i className="fas fa-check"></i>
                <span>
                  <strong>{x}</strong>
                </span>
              </li>
            );
          }

          // Box3 only
          else if (x === "Unlimited Free Subdomain") {
            return (
              <li className="benefits">
                {" "}
                <i className="fas fa-check"></i>
                <span>
                  <strong>Unlimited</strong> Free Subdomain
                </span>
              </li>
            );
          } else {
            return (
              <li className="benefits">
                {" "}
                <i className="fas fa-check"></i>
                <span>{x}</span>
              </li>
            );
          }
        })}

        {/* Looping NonBenefits Array */}
        {unavailable.map((x) => (
          <li className="nobenefits">
            <i className="fas fa-times"></i>
            <span>{x}</span>
          </li>
        ))}
      </ol>
      {/* Submit Button */}
      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button">
          BUTTON
        </button>
      </div>
    </div>
  );
}
