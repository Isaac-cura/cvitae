import { render } from "@testing-library/react";
import { JobItem } from "./job-item";

describe("Test suite for JobItem component", () => {
  it("should render the component", () => {
    const { container } = render(<JobItem job={{} as any}/>);
    expect(container.innerHTML).not.toBeNull();
  });
  it("The component render Job properties", () => {
    const job = {   
        company: "Microsoft",
        position: "Software developer",
        description: "Develop websites",
        startDate: "2020-01-01",
        endDate: "2020-02-01",
    }
    const { getByText } = render(<JobItem job={job}/>);
    getByText(job.company);
    getByText(job.position);
    getByText(job.description);
    getByText(job.startDate);
    getByText(job.endDate);
  });
  it("The onClose function is called when the close button is clicked", () => {
    const onClose = jest.fn();
    const { getByRole } = render(<JobItem job={{} as any} onClose={onClose}/>);
    getByRole("button").click();
    expect(onClose).toHaveBeenCalled();
  })
});