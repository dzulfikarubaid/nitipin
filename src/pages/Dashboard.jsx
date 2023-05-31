import React, {useState, useEffect} from 'react'

const Dashboard = () => {
    const [state, setState] = useState('')
  return (
    <div className='flex flex-row w-full'>
        <div className='bg-blue-500 text-white font-bold flex flex-col w-[300px] p-4 gap-4 h-screen text-left float-left absolute z-5'>
            <button>Tawaran</button>
            <button>Pengajuan</button>
            <button>Dalam Proses</button>
            <button>Berhasil</button>
            <button>Gagal</button>
        </div>
        <div className=' flex flex-col w-[600px] p-4 gap-4'>
            {state}
        </div>
    </div>
  )
}

export default Dashboard