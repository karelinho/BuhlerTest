
export interface Machine {
    name: string;
    state: MachineState;
}

export enum MachineState {
    running,
    alarm,
    warning
}

export const DUMMY_MACHINES: Machine[] = [
    {
        name: 'Scale',
        state: MachineState.running
    },
    {
        name: 'Attacher',
        state: MachineState.alarm
    },
    {
        name: 'Packer',
        state: MachineState.running
    },
    {
        name: 'Closer',
        state: MachineState.warning
    }
];