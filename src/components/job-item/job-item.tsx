import { Alert } from "react-bootstrap";
import { Job } from "../../domain/profesional-profile.model";

export function JobItem({ job, onClose }: { job: Job, onClose?: () => void }) {
    return (
        <Alert variant="secondary" onClose={onClose} dismissible>
            <Alert.Heading>
                {job.company}
            </Alert.Heading>
            <div>
                {job.position}
            </div>
            <div>
                {job.description}
            </div>
            <div>
                {job.startDate}
            </div>
            <div>
                {job.endDate}
            </div>
        </Alert>
    );
}
