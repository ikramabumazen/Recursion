var  items = [
    { t: "a", LogEntryId: 0, ParentEntry: null },
    { t: "b", LogEntryId: 2, ParentEntry: null },
    { t: "bb1", LogEntryId: 3, ParentEntry: 2 },
    { t: "bb2", LogEntryId: 5, ParentEntry: 2 },
    { t: "bbb2", LogEntryId: 4, ParentEntry: 3 },
    { t: "bbb2", LogEntryId: 7, ParentEntry: 3 },
    { t: "bbbb", LogEntryId: 6, ParentEntry: 4 },
    { t: "bbbb2", LogEntryId: 8, ParentEntry: 4 },
    { t: "a", LogEntryId: 0, ParentEntry: null },
    { t: "aa", LogEntryId: 1, ParentEntry: 0 },
    { t: "c", LogEntryId: 10, ParentEntry: null },
    { t: "k", LogEntryId: 11, ParentEntry: null },
    { t: "f", LogEntryId: 12, ParentEntry: null },
    { t: "ff", LogEntryId: 13, ParentEntry: 12 },
    { t: "ff2", LogEntryId: 14, ParentEntry: 12 },
    { t: "ff2f", LogEntryId: 15, ParentEntry: '14' },
];

let recursionTree = () => {  // functions are values ( always remember )
    return "hi im from recursionTree function it's working will "

}




console.log(
    recursionTree(items)
           );
