import React, { useState } from "react";
import Test from "./components/Test";
import { RoleSelect } from "./components/roleSelect";
import { Player } from "./interfaces/player";
import { playerList } from "./players";
//import { AddPlayers } from "./components/AddPlayers";

function App(): JSX.Element {
    const [role, setRole] = useState<string>("League Manager");
    const [myMap, setMyMap] = useState(new Map());
    const [centralList, setCentralList] = useState<Player[]>(playerList);
    const [filteredList, setFilteredList] = useState<Player[]>(playerList);
    const [widgets, setWidgets] = useState<Player[]>([]);
    const [adminWidgets, setAdminWidgets] = useState<Player[]>([]);
    const [totalRoles, setTotalRoles] = useState<string[]>([
        "League Manager",
        "Team Manager",
        "Guest User"
    ]);
    //const [userDict, setDict] = useState<Record<string, string[]>>({});
    {
        /*}
    function addUser() {
        setTotalRoles([...totalRoles, "User2"]);
    }
{*/
    }
    return (
        <div>
            <h1 className="heading">
                {role === "League Manager" ? (
                    <>
                        <br></br>
                        {"NFL Football TeamBuilder"}
                        <br></br>
                        {"Drag or Click Player Icons to Put Them on Your Team"}
                        <br></br>
                        <br></br>
                    </>
                ) : (
                    <>
                        {" "}
                        {"NFL Football TeamBuilder"}
                        <br></br>
                        {"Drag or Click Player Icons to Put Them on Your Team"}
                    </>
                )}
                <RoleSelect
                    setRole={setRole}
                    role={role}
                    widgets={widgets}
                    setWidgets={setWidgets}
                    adminWidgets={adminWidgets}
                    setAdminWidgets={setAdminWidgets}
                    totalRoles={totalRoles}
                    setTotalRoles={setTotalRoles}
                    myMap={myMap}
                    setMyMap={setMyMap}
                ></RoleSelect>
            </h1>
            <Test
                widgets={widgets}
                setWidgets={setWidgets}
                role={role}
                myMap={myMap}
                setMyMap={setMyMap}
                centralList={centralList}
                setCentralList={setCentralList}
                adminWidgets={adminWidgets}
                setAdminWidgets={setAdminWidgets}
                filteredList={filteredList}
                setFilteredList={setFilteredList}
            ></Test>
            {/*}
                        {role !== "League Manager" ? (
                            <Test
                                widgets={widgets}
                                setWidgets={setWidgets}
                                role={role}
                                myMap={myMap}
                                setMyMap={setMyMap}
                            ></Test>
                        ) : (
                            <span>
                                Central List, Added later when player list
                                created
                            </span>
                        )}
                        {*/}
            {/*}
                    <Col>
                        <h4>Role Select</h4>
                        <RoleSelect
                            setRole={setRole}
                            role={role}
                            widgets={widgets}
                            setWidgets={setWidgets}
                            totalRoles={totalRoles}
                            setTotalRoles={setTotalRoles}
                            myMap={myMap}
                            setMyMap={setMyMap}
                        ></RoleSelect>
                        {/*}<Button onClick={() => addUser()}>Add User</Button>{
                    </Col>
                    */}
            <span className="names">
                Alexander Marshall, Michael Murphy, Sean Johnson, Michael
                Lorang, Dean Turner
            </span>
            <div className="padding"></div>
        </div>
    );
}
export default App;
