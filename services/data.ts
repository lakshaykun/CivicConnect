const issueStatsData = [
  { title: 'Pending', value: 0 },
  { title: 'In Progress', value: 0 },
  { title: 'Resolved', value: 0 },
]

const deptData = [
  { label: 'Departments', value: '' },
  { label: 'Road Maintenance', value: 'Road Maintenance' },
  { label: 'Waste Management', value: 'Waste Management' },
  { label: 'Public Safety', value: 'Public Safety' },
  { label: 'Water Supply', value: 'Water Supply' },
  { label: 'Parks and Recreation', value: 'Parks and Recreation' },
];


const statusData = [
  { label: 'Statuses', value: '' },
  { label: 'Pending', value: 'Pending' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Resolved', value: 'Resolved' },
];

const issueData = [
  { id: '1', title: 'Pothole on Main St', department: 'Road Maintenance', status: 'Pending', image: 'https://placehold.co/600x400', description: 'There is a large pothole on Main St near the intersection with 2nd Ave. It has been causing issues for drivers and needs to be repaired as soon as possible.', progressComment: 'Reported to city council, awaiting response.' },
  { id: '2', title: 'Streetlight not working', department: 'Public Safety', status: 'In Progress', image: 'https://placehold.co/600x400', description: 'The streetlight at the corner of 5th Ave and Main St is not working, creating a safety hazard at night.', progressComment: 'City crew dispatched to fix the issue.' },
  { id: '3', title: 'Overflowing trash bin', department: 'Waste Management', status: 'Resolved', image: 'https://placehold.co/600x400', description: 'The trash bin in the park is overflowing and needs to be emptied.', progressComment: 'Trash bin emptied on 03/15/2023.' },
  { id: '4', title: 'Water leakage on 5th Ave', department: 'Water Supply', status: 'Pending', image: 'https://placehold.co/600x400', description: 'There is a water leakage issue on 5th Ave that needs to be addressed.', progressComment: 'Work order created, awaiting scheduling.' },
  { id: '5', title: 'Broken swing in park', department: 'Parks and Recreation', status: 'In Progress', image: 'https://placehold.co/600x400', description: 'The swing in the park is broken and needs to be repaired.', progressComment: 'Parts ordered, awaiting delivery.' },
  { id: '6', title: 'Graffiti on wall', department: 'Public Safety', status: 'Resolved', image: 'https://placehold.co/600x400', description: 'Graffiti has been reported on the wall of the community center and has been cleaned up.', progressComment: 'Cleanup completed on 03/10/2023.' },
  { id: '7', title: 'Dead tree removal', department: 'Parks and Recreation', status: 'Pending', image: 'https://placehold.co/600x400', description: 'There is a dead tree in the park that needs to be removed.', progressComment: 'Work order created, awaiting scheduling.' },
  { id: '8', title: 'Road sign missing', department: 'Road Maintenance', status: 'In Progress', image: 'https://placehold.co/600x400', description: 'A road sign is missing at the intersection of 3rd Ave and Elm St.', progressComment: 'City crew dispatched to replace the sign.' },
  { id: '9', title: 'Water contamination issue', department: 'Water Supply', status: 'Resolved', image: 'https://placehold.co/600x400', description: 'There was a water contamination issue reported, but it has been resolved.', progressComment: 'Water quality tested and deemed safe.' },
  { id: '10', title: 'Illegal dumping site', department: 'Waste Management', status: 'Pending', image: 'https://placehold.co/600x400', description: 'There is an illegal dumping site that needs to be cleaned up.', progressComment: 'Investigation ongoing.' },
]

export { issueStatsData, deptData, issueData, statusData }