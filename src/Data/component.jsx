import React from 'react';
import AutoSizer from "react-virtualized-auto-sizer";
import { SelectPicker, Table } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;



const data = [
  {
    id: 1,
    "label": "Eugenia",
    "value": "Eugenia",
    "role": "Master"
  },
  {
    id: 2,
    "label": "Kariane",
    "value": "Kariane",
    "role": "Master"
  },
  {
    id: 3,
    "label": "Louisa",
    "value": "Louisa",
    "role": "Master"
  },
  {
    id: 4,
    "label": "Marty",
    "value": "Marty",
    "role": "Master"
  },
]

function HomePage({
  
}) {


  return (
    <div className="p-3" style={{
        height: '100%',
        display: 'flex',
        flexFlow: 'column'
    }}>
      

      <div>
        <div className="form-group row">
          <b className="col">
            Input Harga Kab / Kota
          </b>
        </div>
        <div className="form-group row">
          <label htmlFor="input_provinsi" className="col-sm-2 col-form-label">Pilih Provinsi</label>
          <div className="col-sm-5">
            <SelectPicker data={data} className="w-100" id="input_provinsi"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="input_kabupaten" className="col-sm-2 col-form-label">Pilih Kabupaten</label>
          <div className="col-sm-5">
            <SelectPicker data={data} className="w-100" id="input_kabupaten"/>
          </div>
        </div>
      </div>

      <hr />
      
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        flex: '1 1 auto',
        }}
        >
        <div className="form-group row">
          <b className="col">
            Input Harga Kab / Kota
          </b>
        </div>

        <div className="form-group row">
          <div className="col-4">
          <SelectPicker data={data} className="w-100" id="agen_provinsi"/>
          </div>
          <div className="col-4">
          <SelectPicker data={data} className="w-100" id="agen_kota"/>
          </div>
          <div className="col-4">
          <SelectPicker data={data} className="w-100" id="agen_komoditi"/>
          </div>
        </div>

        <div className="form-group row m-0 flex-grow-1">
          <div className="p-0 col-12" style={{border: '1px solid #e5e5ea'}}>
            <div className="w-100 h-100">
              <AutoSizer disableWidth>
                {({ height, width }) => (
                  <Table
                    affixHeader={1}
                    virtualized={true}
                    height={height}
                    data={[...data,...data,...data,...data,...data,...data,...data,...data,...data,...data,...data,...data,...data,...data,...data]}
                  >
                    <Column width={60} align="center">
                      <HeaderCell>Id</HeaderCell>
                      <Cell dataKey="id" />
                    </Column>

                    <Column flexGrow={1}>
                      <HeaderCell>Nama Agen</HeaderCell>
                      <Cell dataKey="label" />
                    </Column>

                    <Column flexGrow={1}>
                      <HeaderCell>No Telp</HeaderCell>
                      <Cell dataKey="role" />
                    </Column>

                    <Column flexGrow={1}>
                      <HeaderCell>Last Update</HeaderCell>
                      <Cell dataKey="role" />
                    </Column>

                    <Column width={60} align="center">
                      <HeaderCell></HeaderCell>

                      <Cell>
                        {rowData => {
                          function handleAction() {
                            alert(`id:${rowData.id}`);
                          }
                          return (
                            <span>
                              <div className={`fa fa-edit`} onClick={handleAction}/>
                            </span>
                          );
                        }}
                      </Cell>
                    </Column>
                  </Table>
                )}
              </AutoSizer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage