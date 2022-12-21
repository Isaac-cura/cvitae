import { render } from "@testing-library/react";
import { JobItem } from "./job-item";
import moment from "moment";

describe("Test suite for JobItem component", () => {

  let job = {   
    company: "Microsoft",
    position: "Software developer",
    description: "Develop websites",
    startDate: moment("2020-01-01"),
    endDate: moment("2020-02-01"),
}
  it("should render the component", () => {
    const { container } = render(<JobItem job={job}/>);
    expect(container.innerHTML).not.toBeNull();
  });
  it("The component render Job properties", () => {
    const { getByText } = render(<JobItem job={job}/>);
    getByText(job.company);
    getByText(job.position);
    getByText(job.description);
    getByText(job.startDate.toLocaleString());
    getByText(job.endDate.toLocaleString());
  });
  it("The onClose function is called when the close button is clicked", () => {
    const onClose = jest.fn();
    const { getByRole } = render(<JobItem job={job} onClose={onClose}/>);
    getByRole("button").click();
    expect(onClose).toHaveBeenCalled();
  })
});