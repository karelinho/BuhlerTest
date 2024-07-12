
export interface Machine {
    type: MachineType;
    state: MachineState;
}

export enum MachineState {
    running,
    alarm,
    warning
}

export enum MachineType {
    Scale = 'Scale',
    Attacher = 'Attacher',
    Packer = 'Packer',
    Closer = 'Closer'
}

export const DUMMY_MACHINES: Machine[] = [
    {
        type: MachineType.Scale,
        state: MachineState.running
    },
    {
        type: MachineType.Attacher,
        state: MachineState.alarm
    },
    {
        type: MachineType.Packer,
        state: MachineState.running
    },
    {
        type: MachineType.Closer,
        state: MachineState.warning
    }
];